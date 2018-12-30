import Axios from "axios";
import { PRODUCTS_FETCH } from "./Types";

export const productFetch = () => {
    return dispatch => {
        Axios.get("http://localhost:3010/products").then(
            res => {
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
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
