import {CART_UPDATE} from "../actions/types"

export default (state = [], action) => {
    switch (action.type) {
        case CART_UPDATE:
            return [...state, action.payload ]
        default:
            return state
    }
}