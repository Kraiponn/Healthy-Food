import Axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "./Types";

export const productFetch = () => {
    return dispatch => {
        Axios.get("http://localhost:3010/products").then(
            res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            }
        )
    }
}

export const productFetchById = id => {
    return dispatch => {
        Axios.get("http://localhost:3010/products/" + id).then(
            res => {
                dispatch({ type: PRODUCT_FETCH, payload: res.data });
            }
        )
    }
}

export const productDelete = id => {
    return dispatch => {
        Axios.delete("http://localhost:3010/products/" + id).then(
            res => {
                Axios.get("http://localhost:3010/products").then(
                    res => {
                        dispatch({type: PRODUCTS_FETCH, payload: res.data});
                    }
                )
            }
        )
    }
}

export const productCreate = values => {
    return dispatch => {
        Axios.post("http://localhost:3010/products", values).then(
            res => {
                dispatch({ type: PRODUCT_CREATE });
            }
        )
    }
}


export const productUpdate = (id, values) => {
    return dispatch => {
        Axios.put("http://localhost:3010/products/" + id, values).then(
            res => {
                dispatch({ type: PRODUCT_UPDATE });
            }
        )
    }
}