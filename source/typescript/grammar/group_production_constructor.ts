import { Production } from "../types/grammar.js";

export default class implements Production {

    type: "production";
    name: string;
    val: number;
    id: -1;

    constructor(sym, env, lex) {

        var uid = sym[1].map(e => e.uid).sort((a, b) => a < b ? -1 : 1).join(":");

        if (env.bodies.has(uid))
            return env.bodies.get(uid);

        this.type = "production";
        this.name = env.prod_name + "" + "_group_" + env.body_offset + "" + env.body_count + "_" + env.counter++;
        this.val = -1;

        env.bodies.set(uid, this);

        const groupProduction = <Production>{
            subtype: "group",
            name: this.name,
            bodies: sym[1],
            id: -1
        };

        groupProduction.id = env.productions.length;
        env.productions.push(groupProduction);
        env.functions.compileProduction(groupProduction, env, lex);
    }
}