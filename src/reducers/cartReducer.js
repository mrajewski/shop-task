import {CART_UPDATE, CART_CLEAR} from "../actions/types"

export default (state = [], action) => {
    switch (action.type) {
        case CART_UPDATE:
            return [...state, action.payload ]
        case CART_CLEAR:
            return []
        default:
            return state
    }
}