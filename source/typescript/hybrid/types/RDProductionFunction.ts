import { JSNode } from "@candlefw/js";
import { State } from "./State";
export interface RDProductionFunction {
    refs: number;
    id: number;
    fn: string;
    IS_RD: boolean;
    productions?: Set<number>;

    RENDER?: boolean;

    str?: string;

    state?: State;
}