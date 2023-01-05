import { createSlice } from '@reduxjs/toolkit';

import { registerUser } from './authActions';

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  token, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending] : (state) => {
        state.loading = true
        state.error = null
    },
    [registerUser.fulfilled] : (state, action) => {
        state.loading = false
        state.success = true
    },
    [registerUser.rejected] : (state, action) => {
        state.loading = false
        state.error = action.payload
    }
  },
})

export default authSlice.reducer