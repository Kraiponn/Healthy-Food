import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from '../actions/Types';

export default (state = [], action) => {
    switch(action.type) {
        case PRODUCTS_FETCH:
            return action.payload;
        case PRODUCT_FETCH:
            return action.payload;
        case PRODUCT_CREATE:
            return { saved: true, msg: "บันทึกข้อมูลเรียบร้อย" };
        case PRODUCT_UPDATE:
            return { ...state, saved: true, msg: "บันทึกข้อมูลเรียบร้อย" };
        default:
            return state;
    }
}


//export default ProductReducer;