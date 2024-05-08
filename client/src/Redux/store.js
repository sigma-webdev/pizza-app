import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../Redux/AuthSlice';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: ProductSlice,
    cart: CartSlice,
  },
});
