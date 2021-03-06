//@ts-nocheck

/** Compiles a stand alone JS parser from a LR rules table and env object **/

import { types as t, filloutGrammar } from "../../util/common.js";

import createSparseStateMaps from "./create_cpp_state_maps.js";

import { Compiler } from "./cpp_compiler_script.js";

import { types as js_types, arrow_function_declaration, parse as ecmascript_parse } from "@candlefw/js";

export function LRParserCompilerCPP(states, grammar, env) {
    //Build new env variables if they are missing 
    if (!grammar.bodies) {
        filloutGrammar(grammar, env);
    }

    if (states.type !== "lr") {
        throw new Error("");
    }

    const GEN_SYM_LU = new Map();

    let n = 0;

    let types = Object.assign({}, t);

    types.any = 13;
    types.keyword = 14;

    for (let a in types)
        GEN_SYM_LU.set(a, (((n++) / 2) | 0) + 1);

    GEN_SYM_LU.set("white_space_new_line", 12);
    GEN_SYM_LU.set("any", 13);
    GEN_SYM_LU.set("keyword", 14);

    //parse body function
    let symbol_index = 1;
    const
        COMPILE_FUNCTION = (env.options) ? !!env.options.integrate : false,
        functions = [],
        error_handlers = [],
        SYMBOL_INDEX_OFFSET = 15, //Must leave room for symbol types indices
        //Convert all terminals to indices and create lookup map for terminals
        SYM_LU = new Map([
            ...[...GEN_SYM_LU.entries()].map(e => [types[e[0]], e[1]]),
            ...[...grammar.meta.all_symbols.values()].map((e) => ([(e.type == "generated") ? (types[e[0]]) : e.val, (e.type == "generated") ? GEN_SYM_LU.get(e.val) : (symbol_index) + SYMBOL_INDEX_OFFSET]))
        ]);

        SYM_LU.forEach((v,k) => SYM_LU.set(k, symbol_index++));
        
        const { state_functions, goto_functions, state_str_functions, state_maps, goto_maps } = createSparseStateMaps(grammar, states, env, functions, SYM_LU, types);
    for (let i = 0; i < states.length; i++) {
        const production = grammar.bodies[states[i].body].production;
        if (production.error) {
            const funct = production.error;
            error_handlers.push(`${funct.toString().replace(/(anonymous)?[\n\t]*/g,"")}`);
        } else {
            error_handlers.push("e");
        }
    }

    if (env.functions) {
        for (let n in env.functions) {
            const funct = env.functions[n];

            if (COMPILE_FUNCTION || funct.INTEGRATE) {
                //functions.push(`${n}=${funct.toString().replace(/(anonymous)?[\n\t]*/g,"")}`);
                functions.push(`${n}=${generateCompactFunction(funct.toString())}`);
            }
        }
    }

    let default_error = `(tk,r,o,l,p)=>{if(l.END)l.throw("Unexpected end of input");else if(l.ty & (${types.ws | types.nl})) l.throw(\`Unexpected space character within input "\${p.slice(l)}" \`) ; else l.throw(\`Unexpected token [\${l.tx}]\`)}`;

    if (env.functions.defaultError)
        default_error = `(...d)=>fn.defaultError(...d)`;

    const output = Compiler(
        goto_maps,
        state_maps,
        state_functions,
        SYM_LU,
        default_error,
        error_handlers,
        functions,
        state_str_functions,
        goto_functions,
        GEN_SYM_LU,
        [...(grammar.meta.symbols || new Map).values()].map(e => e.val));

    return output;
}

function generateCompactFunction(function_string) {
    
    //return function_string.replace(/(anonymous)?[\n\t]*/g, "");
    let fn = ecmascript_parse(function_string).statements;
    
    fn.id.vals[0] = "";

    if (fn.body) {

        const ids = new Set;
        const cls = new Set;

        if (fn.body.type == js_types.return_statement) {
            fn = new arrow_function_declaration(null, fn.args, fn.body);

            fn.vals[2] = fn.body.expr;
        }

        fn.body.getRootIds(ids, cls);

        const args = fn.args;

        for (let i = args.length - 1; i > -1; i--) {
            let id = args.args[i].name;
            if (ids.has(id)) {
                args.vals = args.args.slice(0, i + 1);
                break;
            }

            if (i == 0) {
                args.vals = [];
            }
        }

    } else {
        fn.vals[1] = [];
    }
    return fn.render();

}
