import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../Redux/AuthSlice';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';
import OrderSlice from './OrderSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: ProductSlice,
    cart: CartSlice,
    order: OrderSlice,
  },
});
