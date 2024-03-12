import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Redux";

const store = configureStore({
  reducer: reducer,
});

export default store;
