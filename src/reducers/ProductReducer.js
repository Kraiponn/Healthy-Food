import { PRODUCTS_FETCH } from '../actions/Types';

export const ProductReducer = (state = [], action) => {
    switch(action.type) {
        case PRODUCTS_FETCH:
            return action.payload;
        default:
            return state;
    }
}


export default ProductReducer;