import URL from "@candlefw/url";
import { Grammar, ProductionBody, Production } from "../types/grammar";
import { AwaitTracker } from "./grammar_parser";
export declare type ImportedProductionList = Array<Production> & {
    SYMBOL_LIST: boolean;
    LU: Map<string, Production>;
};
export declare type ImportedProductions = Map<string, ImportedProductionList>;
export interface GrammarParserEnvironment {
    /**
     * Polls the count value of an object and resolves the promise
     * when the value hits 0;
     *
     * @param data - an AwaitTracker object with the form {count:number}
     */
    SLEEP: (data: AwaitTracker) => Promise<void>;
    bodies: Map<string, ProductionBody>;
    grammarParser: any;
    FILE_URL: URL;
    PENDING_FILES: AwaitTracker;
    AWAIT: AwaitTracker;
    productions: Grammar;
    refs: Map<string, string>;
    body_count: number;
    stamp: string;
    /**
     * The index of the symbol in production that is currently being parsed.
     */
    body_offset: number;
    /**
     * Name of the production that is currently being parsed;
     */
    prod_name: string;
    /**
     * Maps local grammar file identifiers to global grammar file identifiers to
     * resolve grammar files that have been imported from multiple sources
     */
    imported: Map<string, string>;
    /**
     * Productions imported through the importProductionConstructor
     */
    meta_imported_productions: ImportedProductions;
    functions: {
        compileProduction?: any;
        importProduction?: any;
        importData?: any;
        body?: any;
        groupProduction?: any;
        listProduction?: any;
    };
}
