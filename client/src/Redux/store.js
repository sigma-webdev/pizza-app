import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../Redux/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
