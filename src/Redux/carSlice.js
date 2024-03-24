import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://api-car-rental.binaracademy.org";
const token =localStorage.getItem('token_Admin');

export const fetchCar = createAsyncThunk("fetchCar", async (params) => {
  const response = await axios.get(`${URL}/admin/v2/car`, {
    headers: {
      access_token: token,
    },
    params,
  });
  return response.data.cars;
});

//1 pertama tambah asyncthunk
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
    // menampilkan list car berdasarkan category
    filterCategory: (state, action) => {
      state.params.category = action.payload;
    },

    // menampilkan list car berdasarkan pencarian nama mobil
    filterName: (state, action) => {
      state.params.name = action.payload;
    },
    // menghilangkan riwayat filter sebelumnya
    resetFilter: (state) => {
      state.params = {};
    },
  },
  extraReducers: (builder) => {
    // Menampilkan keseluruhan data car
    builder.addCase(fetchCar.fulfilled, (state, action) => {
      state.carList = action.payload;
    });

    // bikin addcar
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.carList = action.payload;
    });
  },
});

export const { filterCategory, filterName, resetFilter } = carSlice.actions;

export default carSlice.reducer;
