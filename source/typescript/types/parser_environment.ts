import { Lexer } from "@candlefw/wind";
import { ErrorHandler } from "./parser_data.js";

/**
 * Defines custom function handlers and options for lrParser
 */
export interface ParserEnvironment {
    functions?: {
        /**
         * #### Last Resort Recovery Handler
         * 
         * Called when all other recovery actions have been exhausted,
         * including *frrh* (First Resort Recovery Handler)
         */
        lrrh?: ErrorHandler;

        /**
         * #### First Resort Recovery Handler
         * 
         * Called before any other recovery action has been taken,
         * including *lrrh* (First Resort Recovery Handler)
         */
        frrh?: ErrorHandler;
    };
    /**
     * Proxy of functions
     */
    fn?: {};
    /**
     * List of options that affect how the grammar is compiled. 
     */
    options?: {
        /**
         * If true functions defined in the environment object will be compiled into 
         * the ParserData.
         */
        integrate?: boolean;

        /**
         * A function that is called before parsing begins.
         * 
         * Useful in resetting environment variables between parsing
         * runs.
         */
        onstart?: (env: ParserEnvironment) => void;
    };
}
