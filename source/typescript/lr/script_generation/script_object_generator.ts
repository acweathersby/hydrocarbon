/** Compiles a stand alone JS parser from a LR rules table and env object **/
//@ts-ignore
import { parser, stmt, renderCompressed, JSNodeType, ext, exp, JSNodeClass } from "@candlefw/js";
import { traverse } from "@candlefw/conflagrate";

import createStateArrays from "./create_state_arrays.js";
import { verboseTemplate } from "./data_object_template.js";
import { types as t, filloutGrammar } from "../../util/common.js";
import { LRStates } from "../../types/lr_state.js";
import { Grammar, SymbolType } from "../../types/grammar.js";
import { ParserEnvironment } from "../../types/parser_environment.js";

function getValueID(e) {
    for (const { node: id } of traverse(e, "nodes")
        .bitFilter("type", JSNodeClass.IDENTIFIER)
    ) return id;
    return "";
}
/**
 * 
 * 
 * @param function_string A function string to convert into an arrow function expression.
 */
function generateCompactFunction(function_string: string) {

    let fn = stmt(function_string);

    fn.nodes[0] = null;

    const
        [, parameters, body] = fn.nodes,
        { nodes: params } = parameters,
        short_names = "_$ABCDEFGHI",
        ids = new Map(params.map((e, i) => {
            const node = getValueID(e);

            const value = node.value;

            node.value = short_names[i];

            return [value, { b: false, s: node.value }];
        }));

    for (const { node: id, meta: { skip } } of traverse(body, "nodes")
        .makeSkippable()
    ) {

        if (id.type == JSNodeType.ArrowFunction) {
            skip();
            continue;
        }

        if (
            id.type == JSNodeType.IdentifierReference
            || id.type == JSNodeType.IdentifierReferenceProperty
        ) {
            if (ids.has(id.value)) {

                const i = ids.get(id.value);

                i.b = true;
                if (id.type == JSNodeType.IdentifierReference)
                    id.value = i.s;
                else
                    id.value = `${id.value}:${i.s}`;
            }

        }
    }

    const last_index = [...ids.values()].reduce((r, v, i) => v.b && i > r ? i : r, -1);

    fn.nodes[1].nodes = params.slice(0, last_index + 1);

    if (body && body.nodes[0].type == JSNodeType.ReturnStatement) {
        const arrow = exp("(a,a)=>(a)");
        // arrow->  paren-> expression_list->  nodes
        if (fn.nodes[1].nodes.length == 1)
            arrow.nodes[0] = params[0];
        else
            arrow.nodes[0] = parameters;

        arrow.nodes[1].nodes[0] = body.nodes[0].nodes[0];

        fn = arrow;
    }

    return renderCompressed(fn);

}

export default function GenerateLRParseDataObject(states: LRStates, grammar: Grammar, env: ParserEnvironment) {
    //Build new env variables if they are missing 
    if (!grammar.bodies)
        filloutGrammar(grammar, env);

    const
        GEN_SYM_LU = <Map<string | number, number>>new Map(),
        types = Object.assign({}, t);

    //@ts-ignore
    types.any = 200;

    //@ts-ignore
    types.keyword = 201;

    let n = 0;
    for (const a in types)
        GEN_SYM_LU.set(a, (((n++) / 2) | 0) + 1);

    n = n / 2;

    GEN_SYM_LU.set("white_space_new_line", n++);
    GEN_SYM_LU.set("any", n++);
    GEN_SYM_LU.set("keyword", n++);

    //parse body function
    const
        COMPILE_FUNCTION = (env.options) ? !!env.options.integrate : false,
        functions = [];


    if (env.functions)
        for (const n in env.functions) {
            const funct = env.functions[n];
            if (COMPILE_FUNCTION || funct.INTEGRATE)
                funct.id = functions.push(`${generateCompactFunction(funct.toString())}`) - 1;
        }

    const
        error_handlers = [],
        SYMBOL_INDEX_OFFSET = ++n, //Must leave room for symbol types indices
        //Convert all terminals to indices and create lookup map for terminals

        SYM_LU = <Map<number | string, number>>new Map([
            ...[...GEN_SYM_LU.entries()].map(e => <[string | number, number]>[types[e[0]], e[1]]),
            ...[...grammar.meta.all_symbols.values()]
                .map((e, i) => (
                    <[string | number, number]>[
                        (e.type == SymbolType.GENERATED)
                            ? types[e[0]]
                            : e.val,
                        (e.type == SymbolType.GENERATED)
                            ? GEN_SYM_LU.get(e.val)
                            : i + SYMBOL_INDEX_OFFSET
                    ]
                )
                )
        ]),
        { state_functions, goto_map_lookup, state_str_functions, state_maps, goto_maps, fork_map } = createStateArrays(grammar, states, env, functions, SYM_LU, types);

    for (let i = 0; i < states.length; i++) {
        const production = grammar.bodies[states[i].body].production;
        if (production.error) {
            const funct = production.error;
            error_handlers.push(`${funct.toString().replace(/(anonymous)?[\n\t]*/g, "")}`);
        } else {
            error_handlers.push("e");
        }
    }

    let default_error = `(tk,r,o,l,p)=>{if(l.END)l.throw("Unexpected end of input");else if(l.ty & (${types.ws | types.nl})) l.throw(\`Unexpected space character within input "\${p.slice(l)}" \`) ; else l.throw(\`Unexpected token [\${l.tx}]\`)}`;

    if (env.functions.defaultError)
        default_error = `(...d)=>d[1].fn.defaultError(...d)`;

    const output = verboseTemplate(
        fork_map,
        goto_maps,
        state_maps,
        state_functions,
        SYM_LU,
        functions,
        state_str_functions,
        goto_map_lookup,
        GEN_SYM_LU,
        [...(grammar.meta.symbols || new Map).values()].map(e => e.val));

    return output;
}
