import { combineReducers } from "redux";
import carSlice from "./carSlice";
import orderSlice from "./orderSlice";

const reducer = combineReducers({
  car: carSlice,
  orders:orderSlice
});
export default reducer;
