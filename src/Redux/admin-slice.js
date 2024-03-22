import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../api/BASE_API";

const initialState = {
  isAdminAuthenticated: !!localStorage.getItem("token_Admin"),
};

const loginAdmin = createAsyncThunk("authentication/loginAdmin", async (payload) => {
  try {
    const get = await axios.post(`${BASE_API}/admin/auth/login`, payload);

    return get.data;
  } catch (error) {
    throw error;
  }
});

const authAdminSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isAdminAuthenticated = action.payload;
    },
    logout(state, action) {
      localStorage.removeItem("token_Admin");
      localStorage.removeItem("role");
      state.isAdminAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      localStorage.setItem("token_Admin", action.payload.access_token);
      console.log(action);
      localStorage.setItem("role", action.payload.role);
      authAdminSlice.caseReducers.login(state, {
        payload: !!action.payload,
        type: loginAdmin.typePrefix,
      });
    });
    builder.addCase(loginAdmin.rejected, (state) => {
      authAdminSlice.caseReducers.login(state, {
        payload: false,
        type: loginAdmin.typePrefix,
      });
    });
  },
});

export const { login, logout } = authAdminSlice.actions;

export { loginAdmin };

export default authAdminSlice;
