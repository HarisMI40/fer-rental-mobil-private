import { combineReducers } from "redux";
import carSlice from "./carSlice";
import orderSlice from "./orderSlice";

import barSlice from "./barSlice";


 import authAdminSlice from "./admin-slice";

const reducer = combineReducers({
  car: carSlice,
  orders: orderSlice,
  adminStore: authAdminSlice.reducer,
  orderbarSlice:barSlice
});
export default reducer;
