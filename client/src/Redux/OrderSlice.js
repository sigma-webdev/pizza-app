import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Helper/axiosInstance';
import toast from 'react-hot-toast';

const initialState = {
  ordersData: null,
};

// handle add to cart
export const placeOrder = createAsyncThunk(
  'cart/placeOrder',
  async ({ cartId, detail }) => {
    console.log(detail);
    console.log(cartId);
    try {
      const res = axiosInstance.post(`/order/cart/${cartId}`, detail);

      toast.promise(res, {
        loading: 'Placing an order...',
        success: 'Order placed successfully',
        error: 'Failed to place the order',
      });

      const response = await res;
      console.log(response);

      return response?.data?.order; // Return the order from the response data
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Failed to place the order'
      );
    }
  }
);

/**
 * Create slice for the order
 */
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      if (action.payload) {
        state.ordersData = action.payload;
      }
    });
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
