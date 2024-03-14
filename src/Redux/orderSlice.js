import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch orders data from the API
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async ({ currentPage, rowsPerPage }) => {
    const response = await fetch(
        `https://api-car-rental.binaracademy.org/admin/v2/order?sort=user_email:asc&page=${
            currentPage + 1
          }&pageSize=${rowsPerPage}`,
      {
        headers: {
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

// Create a slice for orders data
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    totalCount: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
   //
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.orders;
        state.totalCount = action.payload.count;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;