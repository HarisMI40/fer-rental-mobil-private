import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api-car-rental.binaracademy.org";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwNTMzMTc5N30.BPM3cOObRc3Kcxs8vGt3OF86J7Ti620px2otHfCCTJo";

export const fetchCar = createAsyncThunk("fetchCar", async (params) => {
  const response = await axios.get(`${URL}/admin/v2/car`, {
    headers: {
      access_token: token,
    },
    params,
  });
  return response.data.cars;
});

//
export const addCar = createAsyncThunk("addCar", async (params) => {
  const response = await axios.post(`${URL}/admin/car`, {
    headers: {
      access_token: token,
    },
    params,
  });
  return response.data.cars;
});

// nilai awal
const initialState = {
  carList: [],
  params: {},
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.params.category = action.payload;
    },

    // set state
    // inputCar:
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCar.fulfilled, (state, action) => {
      state.carList = action.payload;
    });

    // bikin addcar
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.carList = action.payload;
    });
  },
});

export const {updateCategory} = carSlice.actions;
export default carSlice.reducer;
