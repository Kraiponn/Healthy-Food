import Axios from "axios";
import { ORDERS_FETCH } from '../actions/Types';

export const ordersFetch = () => {
    return dispatch => {
        Axios.get("http://localhost:3010/orders").then(
            res => {
                dispatch({type: ORDERS_FETCH, payload: res.data});
            }
        )
    }
}

export const orderDelete = id => {
    return dispatch => {
        Axios.delete("http://localhost:3010/orders/" + id).then(
            res => {
                Axios.get("http://localhost:3010/orders").then(
                    res => {
                        dispatch({type: ORDERS_FETCH, payload: res.data});
                    }
                )
            }
        )
    }
}