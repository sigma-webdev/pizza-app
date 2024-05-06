import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../Helper/axiosInstance';
import toast from 'react-hot-toast';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  data: JSON.parse(localStorage.getItem('data')) || {},
  role: localStorage.getItem('role') || '',
};

// slice to handle signup
export const createAccount = createAsyncThunk('/auth/signup', async (data) => {
  try {
    let res = axiosInstance.post('auth/register', data);

    toast.promise(res, {
      loading: 'Please wait! Creating your account',
      success: (data) => {
        return data?.data?.message;
      },
      error: 'Failed to create account',
    });
    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// slice to handle login
export const login = createAsyncThunk('auth/login', async (data) => {
  try {
    let res = axiosInstance.post('/auth/login', data);

    await toast.promise(res, {
      loading: 'Loading...',
      success: (data) => {
        return data?.data?.message;
      },
      error: 'Failed to log in',
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

// handle user logout
export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    let res = axiosInstance.post('/auth/logout');

    await toast.promise(res, {
      loading: 'logging out ...',
      success: (data) => {
        return data?.data?.message;
      },
      error: 'Failed to logout',
    });

    // getting response resolved here
    res = await res;
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

// handle fetch user data
export const getUserData = createAsyncThunk('/user/details', async () => {
  try {
    const res = await axiosInstance.get('/user/profile');
    return res?.data;
  } catch (error) {
    toast.error(error.message);
  }
});

export const updateProfile = createAsyncThunk(
  '/user/update/profile',
  async (data) => {
    try {
      let res = axiosInstance.put('/user/profile', data);
      toast.promise(res, {
        loading: 'Updating...',
        success: (data) => {
          return data?.data?.message;
        },
        error: 'Failed to update profile',
      });
      // getting response resolve here
      res = await res;
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  //   TODO: 2
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('data', JSON.stringify(action?.payload?.user));
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })
      // clear login data when it logout
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.data = {};
      })

      // TODO: why set again
      // add case when user load details
      .addCase(getUserData.fulfilled, (state, action) => {
        localStorage.setItem('data', JSON.stringify(action?.payload?.user));
        localStorage.setItem('isLoggedIn', true);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      });
  },
});

// TODO: 1
export const {} = authSlice.actions;
export default authSlice.reducer;
