import { combineReducers } from "redux";
import  {ProductReducer, SelectedProductReducer} from "./ProductReducer";

const rootReducer = combineReducers({
    allProducts: ProductReducer,
    product: SelectedProductReducer
})

export default rootReducer;