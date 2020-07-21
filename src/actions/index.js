import {CART_UPDATE} from "./types";

export const cartUpdate = (product) => {
    return {
        type: CART_UPDATE,
        payload: product
    }
}