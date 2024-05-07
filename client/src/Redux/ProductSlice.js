import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Helper/axiosInstance';
import toast from 'react-hot-toast';

const initialState = {
  productData: [],
};

// get all product list
export const getAllProducts = createAsyncThunk('/product/get', async () => {
  try {
    const res = axiosInstance.get('/product/list-all-product');

    toast.promise(res, {
      loading: 'Loading the product data ...',
      success: 'Product Loaded successfully',
      error: 'Failed to get product',
    });

    const response = await res;
    return response.data.product;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// create or add a new product
export const createNewProduct = createAsyncThunk(
  '/product/add',
  async (data) => {
    try {
      const res = axiosInstance.post('/product', data);
      toast.promise(res, {
        loading: 'Creating the new product...',
        success: 'Product added successfully',
        error: 'Failed to add/create course',
      });
      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// delete or remove the product
export const deleteProduct = createAsyncThunk('/product/delete', async (id) => {
  try {
    const res = axiosInstance.delete(`/product/${id}`);
    toast.promise(res, {
      loading: 'Deleting/removing the product...',
      success: 'Product deleted/remove successfully',
      error: 'Failed to delete/remove course',
    });
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// update the product details
export const updateProduct = createAsyncThunk(
  '/course/update',
  async (data) => {
    try {
      const res = axiosInstance.put(`/product/update-product/${data.id}`);

      toast.promise(res, {
        loading: 'Updating the product...',
        success: 'Product updated successfully',
        error: 'Failed to update product',
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

/**
 * Create slice for the product
 */
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      if (action.payload) {
        state.productData = [...action.payload];
      }
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
