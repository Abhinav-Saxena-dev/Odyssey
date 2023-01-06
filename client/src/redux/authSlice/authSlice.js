import { createSlice } from '@reduxjs/toolkit';

import { registerUser, userSignIn } from './authActions';

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null

const initialState = {
  loading: false,
  userInfo: null, // for user object
  token, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials : (state, {payload}) => {
      state.userInfo = payload
    },
    logout : (state) => {
      localStorage.removeItem('token')
      state.loading = false
      state.userInfo = null
      state.token = null
      state.error = null
    }
  },
  extraReducers: {

    [userSignIn.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userSignIn.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.token = payload.token
    },
    [userSignIn.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

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

export const {setCredentials, logout} = authSlice.actions

export default authSlice.reducer