import wind from "@candlefw/wind";
import { performance } from "perf_hooks";

import { getAssertionSymbolFirst, getUniqueSymbolName, isSymAnAssertFunction, isSymAProduction } from "../hybrid/utilities/utilities.js";
import { EOF_SYM, Grammar, ItemMapEntry, Production, SymbolType } from "../types/grammar.js";
import { AssertionFunctionSymbol, Symbol, TokenSymbol } from "../types/Symbol";
import { FIRST } from "./first.js";
import { FOLLOW } from "./follow.js";
import { Item } from "./item.js";
import { getClosure, processClosure } from "./process_closure.js";

export { Item, FOLLOW, FIRST, processClosure };

export const types = wind.types;

const
    production_stack_arg_name = "sym",
    environment_arg_name = "env",
    lexer_arg_name = "lex";

export function getToken(l, SYM_LU, IGNORE_GRAMMAR_SYMBOLS: boolean = false) {
    if (l.END) return 0;

    if (!IGNORE_GRAMMAR_SYMBOLS)
        if (SYM_LU.has(l.tx) || SYM_LU.has(l.ty)) return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);

    if ((l.ty & types.num)) {

        switch (l.ty) {
            case types.sci:
                return "sci";
            case types.hex:
                return "hex";
            case types.oct:
                return "oct";
            case types.bin:
                return "bin";
            case types.flt:
                return "flt";
            case types.int:
                return "int";
            default:
            case types.num:
                return "num";
        }
    }

    switch (l.ty) {
        case types.id:
            return "id";
        case types.string:
            return "str";
        case types.new_line:
            return "nl";
        case types.ws:
            return "ws";
        case types.tab:
            return "tb";
    }

    return "any";
}

/************ Grammar Production Functions *****************************/

function setFunction(env, funct, function_params = [], this_object = null) {

    let func;

    try {
        func = (Function).apply(this_object, function_params.concat([(funct.type == "RETURNED" ? "" : "") + funct.txt.trim()]));
    } catch (e) {
        func = () => { return { error: e, type: "error" }; };

        throw e;
    }

    return func;
}

function addFunctions(funct, production, env) {

    if (!env.id)
        env.id = 1;

    if (!env.FLUT)
        env.FLUT = new Map;

    if (!production.func_counter)
        production.func_counter = 0;

    if (!funct.env) {
        const str = funct.txt.trim();
        let name = env.FLUT.get(str);
        if (!name) {
            name = funct.type[0] + production.id + (production.func_counter++) + "_" + production.name.replace(/\$/g, "_");
            //funct.name = name;
            env.functions[name] = setFunction(null, funct, [production_stack_arg_name, environment_arg_name, lexer_arg_name, "pos", "output", "len"], {});
            env.functions[name].INTEGRATE = true;
            env.FLUT.set(str, name);
        }

        //funct.name = name;
    }
}

export function getPrecedence(term, grammar) {
    return -1;
}

export function createPrecedence(body, grammar) {
    const prec = body.precedence;
    let l = 0;
    for (let i = 0; i < body.length; i++) {
        l = Math.max(getPrecedence(body[i], grammar), l);
    }
    return (l >= 0) ? prec : Math.min(l, prec);
}
/**
 * Fillout Worker Grammar
 * 
 * Takes an existing filled out grammar that has been transferred to 
 * a worker and re-implements missing methods for custom types.
 * 
 * Returns nothing
 */
export function filloutWorkerGrammar(grammar: Grammar) {
    for (const [key, val] of grammar.item_map.entries()) {
        val.item = Item.fromArray(val.item);
    }
}

export function filloutGrammar(grammar: Grammar, env) {

    const bodies = [],
        reduce_lu: Map<string, number> = new Map,
        symbols: Map<string, Symbol> = new Map([[getUniqueSymbolName(EOF_SYM), EOF_SYM]]),
        syms = [...grammar?.meta?.symbols?.values() ?? []];

    for (let i = 0, j = 0; i < grammar.length; i++) {
        const production = grammar[i];

        if (production.recovery_handler) {
            const rh = production.recovery_handler;
            rh.txt = "return " + rh.body_text;

            if (!reduce_lu.has(rh.txt))
                reduce_lu.set(rh.txt, reduce_lu.size);

            rh.reduce_id = reduce_lu.get(rh.txt);
        }

        for (let i = 0; i < production.bodies.length; i++, j++) {

            const body = production.bodies[i];

            if (!!body.reduce_function) {

                const txt = body.reduce_function.name
                    ? `${body.reduce_function.type == "CLASS" ? "return new" : "return"} env.functions.${body.reduce_function.name}(sym, env, pos);`
                    : body.reduce_function.txt;

                if (!reduce_lu.has(txt))
                    reduce_lu.set(txt, reduce_lu.size);
                body.reduce_id = reduce_lu.get(txt);
            } else
                body.reduce_id = -1;

            body.id = j;
            body.production = production;
            bodies.push(body);
            body.precedence = createPrecedence(body, grammar);

            //Dedupes symbols 
            syms.push(...[...body.error.values(), ...body.excludes.values(), ...body.ignore.values(), body.sym].flat());

            if (env) {
                if (body.reduce_function)
                    addFunctions(body.reduce_function, production, env);

                body.functions.forEach(f => {
                    addFunctions(f, production, env);
                });
            }
        }
    }

    const sym_function = (s: Symbol) => {
        switch (s.type) {
            case SymbolType.PRODUCTION:
                /*Do nothing */ break;
            case SymbolType.PRODUCTION_ASSERTION_FUNCTION:
            case SymbolType.GENERATED:
            case SymbolType.SYMBOL:
            case SymbolType.ESCAPED:
            case SymbolType.LITERAL:
            default:
                symbols.set(getUniqueSymbolName(s), s);
        }
    };

    for (const sym of syms.setFilter(s => getUniqueSymbolName(s))) sym_function(sym);

    grammar.meta = Object.assign({}, grammar.meta, { all_symbols: symbols, reduce_functions: reduce_lu });
    grammar.bodies = bodies;
    grammar.item_map = null;

    for (const sym of syms.filter(isSymAnAssertFunction)) getAssertionSymbolFirst(<AssertionFunctionSymbol>sym, grammar);

    buildItemMap(grammar);

    return grammar;
}

export function getItemMapEntry(grammar: Grammar, item_id: string): ItemMapEntry {
    if (!grammar.item_map.has(item_id)) {
        grammar.item_map.set(item_id, <ItemMapEntry>{
            item: null,
            closure: null,
            LR: false,
            RR: null,
            //index: -1,
            containing_items: new Set,
            depth: Infinity
        });
    }

    return grammar.item_map.get(item_id);
}

export function buildItemClosures(grammar: Grammar) {
    const
        production_ready = grammar.map(i => ({ count: 0, items: null })),
        items_sets = grammar.flatMap(p => {
            const items = p.bodies.map(b => {
                const out_syms = [];
                let item = new Item(b.id, b.length, 0, EOF_SYM);
                let depth = b.id + p.id * grammar.length;
                do {
                    out_syms.push({
                        item,
                        closure: [],
                        excludes: b.excludes.get(item.offset) ?? [],
                        rank: item.offset,
                        depth: depth,
                        hash: "",
                        containing_items: new Set
                    });
                    depth++;
                } while (item = item.increment());

                return out_syms;
            });
            production_ready[p.id].all_items = items;
            production_ready[p.id].items = items.map(i => i[0]);

            return items.flat();
        }),
        sorted = new Set(),
        completed: typeof items_sets = [],
        prods = [];

    function setItem(i: any, rank = 1, depth = Infinity) {
        const { item } = <{ item: Item; }>i;
        i.depth = Math.min(i.depth, depth);
        if (!sorted.has(item.id)) {
            sorted.add(item.id);
            if (item.atEND) completed.push(i);
            else {
                const sym = item.sym(grammar);
                if (sym.type == SymbolType.PRODUCTION) {
                    const prod_id = sym.val;
                    prods.push(i);
                    for (const items of production_ready[prod_id].all_items) {
                        let j = 0;
                        for (const a of items) {
                            a.rank = rank;
                            setItem(a, a.rank + 1, i.depth + 1 + j++);
                        }
                    }
                } else {
                    completed.push(i);
                }
            }
        }
    }

    for (const i of items_sets)
        setItem(i);

    prods.sort((a, b) => b.rank - a.rank);
    let CHANGE = true, pending = completed.concat(prods);
    while (CHANGE || pending.length > 0) {

        CHANGE = false;
        let temp_pending = pending.slice();
        pending.length = 0;
        for (const obj of temp_pending) {
            const { closure, item, excludes, hash } = obj;
            let temp = [];
            temp.push(item);
            if (item.atEND) {
                obj.closure = temp;
                continue;
            };
            const sym = item.sym(grammar);
            if (sym.type == SymbolType.PRODUCTION) {
                const prod_id = sym.val;
                temp.push(...production_ready[prod_id].items.flatMap(i => i.closure));
            }
            temp = temp.setFilter(i => i.id);
            let new_hash = temp.map(i => i.id).sort().join("");
            for (const exclude of excludes) {

                outer:
                for (let i = 0; i < temp.length; i++) {
                    let itm = Item.fromArray(<Item>temp[i]);
                    if (itm.length < exclude.length) continue;
                    itm[2] = exclude.length - 1;

                    for (let i = exclude.length - 1; i >= 0; i--) {
                        const sym = itm.sym(grammar);
                        if (getUniqueSymbolName(sym) != getUniqueSymbolName(exclude[i])) continue outer;
                        itm = itm.decrement();
                    }
                    temp.splice(i--, 1);
                }
            }
            if (obj.hash != new_hash) {
                pending.push(obj);
            } else {
                CHANGE = true;
            }
            obj.closure = temp;
            obj.hash = new_hash;
        }
    }

    grammar.item_map = new Map(items_sets.map(i => [i.item.id, i]));

    for (const obj of items_sets) {
        const { item, closure } = obj,
            item_id = item.id,
            production_id = item.getProduction(grammar).id;

        const LR = item.offset == 0 &&
            closure.filter(i => i?.sym(grammar)?.type == SymbolType.PRODUCTION).some(i => i.getProductionAtSymbol(grammar).id == production_id);

        //Right recursion occurs when the origin item shows up in a shifted item's list. 
        const RR = item.offset > 0
            ? closure.slice(1).filter(i => i?.sym(grammar)?.type != SymbolType.PRODUCTION)
                .filter(i => i.body == item.body)
                .map(i => getUniqueSymbolName(i.sym(grammar)))
            : [];

        //Convert items to their string identifier to be more data friendly when transferring to workers. 
        obj.closure = obj.closure.map(i => i.id);

        for (const sub_item_id of obj.closure)
            if (item_id !== sub_item_id) getItemMapEntry(grammar, sub_item_id).containing_items.add(item_id);

        obj.LR = LR;
        obj.RR = RR;
    }


    return items_sets;
}

export function buildItemMapProduction(prod: Production, grammar: Grammar, item_map = new Map(), depth: number = 0, visited: Set<number> = new Set, index = 0) {

    if (!grammar.item_map) grammar.item_map = item_map;

    if (visited.has(prod.id)) return index;

    visited.add(prod.id);

    const to_process = [];

    for (const body of prod.bodies) {

        let item = new Item(body.id, body.length, 0, EOF_SYM);
        let offset = 0;

        while (item) {

            const item_id = item.id;

            const { closure } = processClosure([item], grammar, true, body.excludes.get(offset));
            //Check for left and right recursion

            // Left recursion occurs when the production symbol shows up on the
            // leftmost side of an item. This is only relevant when the originating
            // item is at the initial state
            const production_id = item.getProduction(grammar).id;

            const LR = item.offset == 0 &&
                closure.filter(i => i?.sym(grammar)?.type == SymbolType.PRODUCTION).some(i => i.getProductionAtSymbol(grammar).id == production_id);

            //Right recursion occurs when the origin item shows up in a shifted item's list. 
            const RR = item.offset > 0
                ? closure.slice(1).filter(i => i?.sym(grammar)?.type != SymbolType.PRODUCTION)
                    .filter(i => i.body == item.body)
                    .map(i => getUniqueSymbolName(i.sym(grammar)))
                : [];

            const final_closure = closure.map(i => i.id);


            const item_entry = getItemMapEntry(grammar, item_id);
            item_entry.item = item;
            item_entry.closure = final_closure.setFilter();
            item_entry.LR = LR;
            item_entry.RR = RR;
            item_entry.depth = depth + offset;


            for (const sub_item_id of final_closure)
                if (item_id !== sub_item_id) getItemMapEntry(grammar, sub_item_id).containing_items.add(item_id);

            if (!item.atEND)
                if (isSymAProduction(item.sym(grammar)))
                    to_process.push({ prod: item.getProductionAtSymbol(grammar).id, offset: offset + 1 });

            item = item.increment();
            index++;
            offset++;
        }
    }

    for (const { prod, offset } of to_process)
        index = buildItemMapProduction(grammar[prod], grammar, item_map, depth + offset, visited, index);

    return index;
}

export function buildItemMap(grammar: Grammar) {
    buildItemClosures(grammar);
}

export function doesItemHaveLeftRecursion(item: Item, grammar: Grammar): boolean {
    return grammar.item_map.get(item.id).LR;
};

export function doesSymbolLeadToRightRecursion(sym: TokenSymbol, item: Item, grammar: Grammar): boolean {
    if (!item) return false;
    return grammar.item_map.get(item.id).RR.includes(getUniqueSymbolName(sym));
}

export function getCommonAncestors(grammar: Grammar, items: Item[]): Item[] {
    //Get all closures that contain this item

    const contains =
        items.flatMap(

            i => {
                const ids = [];
                if (i.offset == 0) {
                    ids.push(i.id);
                } else if (!i.atEND && i.sym(grammar).type == SymbolType.PRODUCTION) {
                    for (const body of i.getProductionAtSymbol(grammar).bodies)
                        ids.push(new Item(body.id, body.length, 0, EOF_SYM).id);
                }

                return [...ids.flatMap(i => [...grammar.item_map.get(i).containing_items.values()])]
                    .map(id => grammar.item_map.get(id))
                    .sort((a, b) => a.depth - b.depth)
                    .map(i => i.item)
                    .filter(i => i.offset == 0);
            }
        )
            .group(i => i.id)
            .filter(i => i.length == items.length)
            .map(i => i[0])
            .sort((a, b) =>
                grammar.item_map.get(b.id).depth -
                grammar.item_map.get(a.id).depth
            );

    return contains;//.map(i => i.getProductionAtSymbol(grammar).name + " \n          " + i.renderUnformattedWithProduction(grammar));
}

export interface TransitionTreeNode {
    last_progress?: number,
    progress?: boolean,
    depth: number;
    sym: string;
    roots: Item[];
    next: TransitionTreeNode[];
    final_count: number;
}
export interface closure_group {
    sym: Symbol;
    index: number;
    closure: Item[];

    final: number;
}

/**
 * Givin a set of root items, return a tree of nodes where each node represents a
 * transition on a symbol and a the collection of root items that still exist at 
 * that node. Depth limited to some givin value to prevent infinite recursion.
 * 
 * Default depth is 1.
 */
export function getTransitionTree(
    grammar: Grammar,
    root_items: Item[],
    max_tree_depth = 1,
    max_no_progress = 3,
    /**
     * Max amount of time the search process may take,
     * measured in milliseconds. 
     * 
     * Default is 2000 milliseconds
     */
    max_time_limit = 500,
    depth: number = -1,
    closures: closure_group[] = null,
    len = 0,
    last_progress = 0,
    root_time = performance.now()
): { tree_nodes: TransitionTreeNode[], clear: boolean, AMBIGUOUS: boolean; max_depth: number; } {

    if (!closures) {
        closures = root_items.map((i, index) => ({ sym: null, index, closure: getClosure([i], grammar) }));
        const { AMBIGUOUS, clear, max_depth, tree_nodes } = getTransitionTree(grammar, root_items, max_tree_depth, max_no_progress, max_time_limit, 0, closures);
        return {
            AMBIGUOUS,
            clear,
            max_depth,
            tree_nodes: [
                {
                    depth: -1,
                    next: tree_nodes,
                    roots: root_items,
                    sym: null,
                    final_count: 0
                }
            ]
        };
    }

    if (performance.now() - root_time > max_time_limit)
        return { tree_nodes: [], clear: true, AMBIGUOUS: true, max_depth: depth };

    if (root_items.length == 1)
        return { tree_nodes: [], clear: true, AMBIGUOUS: false, max_depth: depth };

    if (depth > max_tree_depth)
        return { tree_nodes: [], clear: true, AMBIGUOUS: true, max_depth: depth };

    const
        groups = closures.flatMap(cg => getClosureGroups(grammar, cg)).group(cg => getUniqueSymbolName(cg.sym)),
        tree_nodes: TransitionTreeNode[] = [];

    let
        GLOBAL_PROGRESS = false,
        CLEAR_REQUESTED = false,
        AMBIGUOUS = false,
        max_depth = depth;

    for (const group of groups) {

        let next = [];

        const
            sym = group[0].sym,
            new_roots = group.map(cg => cg.index).setFilter().map(i => root_items[i]),
            progress = new_roots.length != len,
            quit = !progress && (depth - last_progress) >= Math.max(max_tree_depth - depth, max_no_progress),
            curr_progress = progress ? depth : last_progress;

        if (progress) GLOBAL_PROGRESS = true;

        if (quit) CLEAR_REQUESTED = true;

        if (!quit && new_roots.length > 1) {

            const { tree_nodes, clear, AMBIGUOUS: A, max_depth: md } =
                getTransitionTree(grammar, root_items, max_tree_depth, max_no_progress, max_time_limit, depth + 1, group, new_roots.length, curr_progress, root_time);

            AMBIGUOUS = AMBIGUOUS || A;

            if (clear) CLEAR_REQUESTED = true; else {
                max_depth = Math.max(md, max_depth + 1);
                next = tree_nodes;
            }
        }

        tree_nodes.push({
            last_progress: depth - last_progress,
            progress,
            sym: getUniqueSymbolName(sym),
            depth,
            roots: new_roots,
            next: progress ? next : [],
            final_count: group.reduce((r, c) => c.final + r, 0)
        });
    }

    if (CLEAR_REQUESTED && !GLOBAL_PROGRESS)
        return { tree_nodes: [], clear: true, AMBIGUOUS: true, max_depth: max_depth };

    return { tree_nodes, clear: false, AMBIGUOUS, max_depth: max_depth };
}

function getClosureGroups(grammar: Grammar, { index, closure, final }: closure_group): closure_group[] {

    if (final)
        return [];

    const group = [];
    let i = 0;
    for (const item of closure) {
        const sym = item.sym?.(grammar);
        if (item.atEND) {
            const prod = item.getProduction(grammar);
            let new_closure = closure.slice()
                .filter((item, i) => (!item.atEND && isSymAProduction(item.sym(grammar))))
                .flatMap(i => incrementWithClosure(grammar, i, prod)).setFilter(i => i.id);
            /*
                At end of root production closure[0]
            */
            if (new_closure.length == 0) {
                const production_id = closure[0].getProduction(grammar).id;
                const follow = FOLLOW(grammar, production_id);

                for (const sym of follow.values())
                    group.push({ sym, index, closure: closure.slice(0, 1), final: 1 });

            } else
                group.push(...getClosureGroups(grammar, { sym: grammar.meta.symbols.get("production" + prod.id), index: index, closure: new_closure, final: 0 }));
        } else if (!isSymAProduction(item.sym(grammar))) {
            const new_closure = closure.slice().filter((item, i) => !item.atEND && isSymAProduction(item.sym(grammar)));
            new_closure.push(...incrementWithClosure(grammar, item, null, true));
            group.push({ sym, index: index, closure: new_closure.setFilter(i => i.id), final: 0 });
        }
        i++;
    }
    return group;
}
function incrementWithClosure(grammar: Grammar, item: Item, prod: Production, AUTO_INCREMENT: boolean = false): Item[] {
    //if (grammar.item_map.get(item.id).LR || grammar.item_map.get(item.id).RR.length > 0)
    //    return [];
    if (AUTO_INCREMENT || item.getProductionAtSymbol(grammar).id == prod.id)
        return getClosure([item.increment()], grammar);
    return [item];
}

