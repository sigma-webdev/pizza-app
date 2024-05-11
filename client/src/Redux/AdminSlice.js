import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Helper/axiosInstance';
import toast from 'react-hot-toast';

const initialState = {
  allUsers: [],
  allOrders: [],
};

// handle to get all the users
export const getAllUsers = createAsyncThunk('admin/users/get-all', async () => {
  try {
    const res = axiosInstance.get('/user/list-all-users');
    toast.promise(res, {
      loading: 'Fetching all the list of users...',
      success: 'All users successfully fetch',
      error: 'Users not able to fetch',
    });
    const response = await res;

    return response?.data?.data?.users;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// handle to get all the users
export const getAllOrders = createAsyncThunk(
  'admin/user/all-order',
  async () => {
    try {
      const res = axiosInstance.get('/order/all');
      toast.promise(res, {
        loading: 'Fetching all the orders of users...',
        success: 'All order successfully fetch',
        error: 'Orders not able to fetch',
      });
      const response = await res;

      return response?.data?.orders;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const adminSlice = createSlice({
  name: 'adminData',
  initialState,
  reducers: {
    // Add any custom reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        if (action.payload) {
          state.allUsers = action.payload;
        }
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        if (action?.payload) {
          state.allOrders = action?.payload;
        }
      });
  },
});

export const {} = adminSlice.actions;
export default adminSlice.reducer;
