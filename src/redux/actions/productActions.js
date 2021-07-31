import { ActionTypes } from "../contants/action-type";

export const SetProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}