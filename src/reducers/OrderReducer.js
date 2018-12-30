import { ORDERS_FETCH } from '../actions/Types';

export const OrderReducer = (state = [], action) => {
    switch(action.type) {
        case ORDERS_FETCH:
            return action.payload;
        default:
            return state;
    }
}


export default OrderReducer;