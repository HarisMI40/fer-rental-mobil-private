import { combineReducers } from "redux";
import carSlice from "./carSlice";
import orderSlice from "./orderSlice";
import authAdminSlice from "./admin-slice";

const reducer = combineReducers({
  car: carSlice,
  orders: orderSlice,
  adminStore: authAdminSlice.reducer,
});
export default reducer;
