import { ActionTypes } from "../contants/action-type";

export const SetProduct = (product) =>{
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: product
    }
}

export const SelectedProduct = (products) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}