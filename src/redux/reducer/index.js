import { combineReducers } from "redux";
import  ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
    allProducts: ProductReducer
})

export default rootReducer;