import { Grammar } from "../../types/grammar.js";
import { HybridCompilerOptions } from "../CompiledHybridOptions.js";
import {
    TokenSpaceIdentifier,
    TokenNumberIdentifier,
    TokenIdentifierIdentifier,
    TokenNewLineIdentifier,
    TokenSymbolIdentifier
} from "../utilities/utilities.js";
export const renderParserScript = (grammar: Grammar, options: HybridCompilerOptions, js_data?: string, BUILD_LOCAL: boolean = false) => {

    return `

${BUILD_LOCAL ? "" : `
    import loader from "@assemblyscript/loader";
    import {buildParserMemoryBuffer} from "${options.memory_loader_url}";              
    import URL from "@candlefw/url";
    import Lexer from "@candlefw/wind";
`} 

const 
    { shared_memory, action_array, error_array } = buildParserMemoryBuffer(true),
    recognizer = ${js_data}(shared_memory),
    fns = [(e,sym)=>sym[sym.length-1], \n${[...grammar.meta.reduce_functions.keys()].map((b, i) => {
        if (b.includes("return")) {
            return b.replace("return", "(env, sym, pos)=>(").slice(0, -1) + ")" + `/*${i}*/`;
        } else {
            return `(env, sym)=>new (class{constructor(env, sym, pos){${b}}})(env, sym)` + `/*${i}*/`;
        }
    }).join("\n,")
        }];

${BUILD_LOCAL ? "" : "export default async function loadParser(){"} 
    
    return function (str, env = {}) {
        
        const 
            FAILED = recognizer(str), // call with pointers
            aa = action_array,
            er = error_array,
            stack = [];
    
        let action_length = 0;
    
        if (FAILED) {
            
            let error_off = 10000000000000;
            let error_set = false;


            const lexer = new Lexer(str);
            const probes = [];
            //Extract any probes
            for (let i = 0; i < er.length; i++) {
                if (((er[i] & 0xF000000F) >>> 0) == 0xF000000F) {
                    const num = er[i] & 0xFFFFFF0;
                    const sequence = (num >> 4) & 0xFFF;
                    const identifier = (num >> 16) & 0xFFF;
                    const token_type = {
                        [${TokenSpaceIdentifier}]:"TokenSpace",
                        [${TokenNumberIdentifier}]:"TokenNumber",
                        [${TokenIdentifierIdentifier}]:"TokenIdentifier",
                        [${TokenNewLineIdentifier}]:"TokenNewLine",
                        [${TokenSymbolIdentifier}]:"TokenSymbol",
                    }[er[i + 1]];
                    const token_length = er[i + 2];
                    const offset = er[i + 3];
                    const prod = er[i + 4] << 0;
                    const stack_ptr = er[i + 5];
                    const FAILED = !!er[i + 6];
                    i += 7;
                    const cp = lexer.copy();
                    cp.off = offset;
                    cp.tl = token_length;
                    probes.push({
                        identifier,
                        str: cp.tx,
                        token_type,
                        token_length,
                        offset,
                        stack_ptr,
                        prod,
                        FAILED
                    });
                } else if(er[i]>0 && !error_set){
                    error_set = true;
                    error_off = Math.min(error_off, er[i]);
                }
            }

            while (lexer.off < error_off && !lexer.END) lexer.next();
            console.table(probes);
            console.log(error_off, str.length);
            console.log(lexer.errorMessage(\`Unexpected token[\${ lexer.tx }]\`));
    
        } /*else {*/

            let offset = 0, pos = [{ off: 0, tl: 0 }];

            for (const action of aa) {

                action_length++;
                let prev_off = 0;

                if (action == 0) break;

                switch (action & 1) {
                    case 0: //REDUCE;
                        {
                            const
                                DO_NOT_PUSH_TO_STACK = (action >> 1) & 1,
                                body = action >> 16,
                                len = ((action >> 2) & 0x3FFF);

                            const pos_a = pos[pos.length - len - 1];
                            const pos_b = pos[pos.length - 1];
                            pos[stack.length - len] = { off: pos_a.off, tl: 0 };

                          //  console.log(stack)

                            stack[stack.length - len] = fns[body](env, stack.slice(-len), { off: pos_a.off, tl: pos_b.off - pos_a.off + pos_b.tl });


                            //  console.log(stack[stack.length - len], pos);

                            if (!DO_NOT_PUSH_TO_STACK) {
                                stack.length = stack.length - len + 1;
                                pos.length = pos.length - len + 1;
                            } else {
                                stack.length = stack.length - len;
                                pos.length = pos.length - len;
                            }
                            // console.log(pos);

                        } break;

                    case 1: { //SHIFT;
                        const
                            has_len = (action >>> 1) & 1,
                            has_skip = (action >>> 2) & 1,
                            len = action >>> (3 + (has_skip * 15)),
                            skip = has_skip * ((action >>> 3) & (~(has_len * 0xFFFF8000)));
                        offset += skip;
                        if (has_len) {
                            stack.push(str.slice(offset, offset + len));
                            pos.push({ off: offset, tl: len });
                            offset += len;
                        }
                    } break;
                }
            }
            //console.log(stack,aa,er)
        //}
    
        return { result: stack, FAILED: !!FAILED, action_length };
    }
    ${BUILD_LOCAL ? "" : "}"} `;
};