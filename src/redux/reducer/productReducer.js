import  { ActionTypes } from '../contants/action-type'

const initialState = {
    products: [
        {
        id: 1,
        title: "New Bie in redux",
        price: 25,
        category: "men"
    }
]}

 const ProductReducer = (state = initialState, {type, payload}) =>{
    switch(type){

        case ActionTypes.SET_PRODUCT: return state;

        default: return state;
    }
}

export default ProductReducer;