import { combineReducers } from "redux";
import carSlice from "./carSlice";

const reducer = combineReducers({
  car: carSlice,
});
export default reducer;
