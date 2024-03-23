import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderAPI from "./barApi";

// const API_URL = "https://api-car-rental.binaracademy.org/admin";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNTMzMTc5N30.BPM3cOObRc3Kcxs8vGt3OF86J7Ti620px2otHfCCTJo";

export const chartOrderReport = createAsyncThunk(
  "admin/getOrderReport",
  async ({ from, until }, thunkAPI) => {
    try {
      const response = await orderAPI.chartOrderReport({ from, until });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  orderList: [],
  chartReport: null,
};
const chartbarSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(chartOrderReport.fulfilled, (state, actions) => {
      state.chartReport = actions.payload;
    });
    builder.addCase(chartOrderReport.rejected, (state) => {
      state.chartReport = null;
    });

    // [getOrderReport.fulfilled]: (state, action) => {
    //     state.orderReport = action.payload;
    // },
    // [getOrderReport.rejected]: (state, action) => {
    //     state.orderReport = null;
    // }
  },
});

export default chartbarSlice.reducer;
