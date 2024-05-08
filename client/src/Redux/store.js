import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../Redux/authSlice';
import ProductSlice from './ProductSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: ProductSlice,
  },
});
