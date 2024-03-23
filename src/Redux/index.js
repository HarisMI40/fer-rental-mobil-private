import { combineReducers } from "redux";
import carSlice from "./carSlice";
import orderSlice from "./orderSlice";
import barSlice from "./barSlice";

const reducer = combineReducers({
  car: carSlice,
  orders:orderSlice,
  orderbarSlice:barSlice
});
export default reducer;
