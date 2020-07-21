import {CART_UPDATE, CART_CLEAR} from "./types";

export const cartUpdate = (product) => {
    return {
        type: CART_UPDATE,
        payload: product
    }
}

export const cartClear = () => {
    return {
        type: CART_CLEAR
    }
}