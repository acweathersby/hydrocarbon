import { Item } from "../util/common.js";
import {
    getAccompanyingItems,
    itemsToProductions
} from "./utilities/utilities.js";
import { SC } from "./utilities/skribble.js";
import { RenderBodyOptions } from "./types/RenderBodyOptions";
import { renderItemReduction } from "./item_render_functions.js";
import { production_global } from "./hybrid_function_constructor.js";


export function processProductionChain(
    code_node: SC,
    options: RenderBodyOptions,
    /**
     * List of production id numbers that have been generated from
     * the proceeding code sequence.
     */
    active_productions: number[]
): number[] {
    let active_items: Item[] = [], { grammar, production_shift_items } = options;

    let prod = active_productions, visited_prods: Set<string> = new Set;

    const items = (production_shift_items);

    active_items = getAccompanyingItems(grammar, active_productions, items);

    if (active_items.length == 0) {
        code_node.addStatement(SC.Assignment(production_global, prod[0]));
        return prod;
    }

    if (active_items.length == 1 && active_items.every(i => i.len == 1)) {
        prod.length = 1;
        while (active_items.length == 1 && active_items.every(i => i.len == 1)) {
            prod[0] = active_items[0].getProduction(grammar).id;
            renderItemReduction(code_node, active_items[0], grammar);
            active_items = getAccompanyingItems(grammar, itemsToProductions(active_items, grammar), production_shift_items);
        }
    }

    code_node.addStatement(SC.Assignment(production_global, prod[0]));

    if (active_items.length > 0) {
        while (active_items.length > 0) {
            const new_items = active_items.filter(i => !visited_prods.has(i.id));
            new_items.forEach(i => visited_prods.add(i.id));
            active_items = getAccompanyingItems(grammar, itemsToProductions(new_items, grammar), production_shift_items);
        }
    }
    return prod;
}
