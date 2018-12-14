import whind from "/node_modules/@candlefw/whind/source/whind.mjs";

export function LRParser(input, state_table, env) {

    let state = [0];
    let lex = whind(input);
    let item_stack = [];
    let sp = 0;

    //↦τ│→ɛθ
    while (true) {
        //check go to for input
        let s = state_table[state[sp]];
        let input = [];
        let action;

        if (lex.ty == lex.types.id) input = "θid";
        else if (lex.END) {
            input = "$";
        } else input = lex.tx;

        if ((action = s.action.get(input)) !== undefined) {
            if (action.name == "REDUCE") //reduce
            {
                //replace items with new state. 
                let length = action.size;

                let body = state_table.bodies[action.body];

                if (body.node) {
                    let results = item_stack.slice(-length);
                    item_stack.length -= length;
                    item_stack.push(new body.node(results, env, lex));
                }

                let funct = body.sr[action.len];

                if (funct)
                    funct(item_stack, env, lex);

                ///////////////////
                state.length -= length;
                sp -= length;
                let d = state_table[state[sp]];
                state.push(d.goto.get(action.production));
                sp++;
            } else if (action.name == "ACCEPT") {

                let length = action.size;

                let body = state_table.bodies[action.body];

                if (body.node) {
                    let results = item_stack.slice();
                    item_stack.length = 0;
                    item_stack.push(new body.node(results, env, lex));
                }

                let funct = body.sr[action.len];

                if (funct)
                    funct(item_stack, env, lex);

                break;
            } else {
                item_stack.push(lex.tx);

                state.push(action.state);

                sp++;

                let sr = state_table.bodies[action.body].sr;

                let funct = sr[action.len];

                if (funct)
                    funct(item_stack, env, lex);

                lex.next();
            }
        } else {
            //Find the follow entry
            lex.throw("undefined state error");
        }
    }

    return item_stack[0];
}