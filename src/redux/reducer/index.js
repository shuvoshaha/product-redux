import { combineReducers } from "redux";
import  {ModalSetToggle, ProductReducer, SelectedProductReducer} from "./ProductReducer";

const rootReducer = combineReducers({
    allProducts: ProductReducer,
    product: SelectedProductReducer,
    setModal: ModalSetToggle
})

export default rootReducer;