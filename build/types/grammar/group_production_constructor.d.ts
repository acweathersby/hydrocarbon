import { Production } from "../types/grammar.js";
export default class implements Production {
    type: "production";
    name: string;
    val: number;
    id: -1;
    constructor(sym: any, env: any, lex: any);
}