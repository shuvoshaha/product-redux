import  { ActionTypes } from '../contants/action-type'

const initialState = {
    products: []
}

 const ProductReducer = (state = initialState, {type, payload}) =>{
    switch(type){

        case ActionTypes.SET_PRODUCT: return {
            ...state,
            products: payload
        };

        default: return state;
    }
}

const SelectedProductReducer =  (state = {}, {type, payload}){
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return{
                ...state,
                ...payload
            }
            default: return state;
    }
}

export default ProductReducer;