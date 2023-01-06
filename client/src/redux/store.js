import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice/authSlice';
import logger from 'redux-logger'


const store = configureStore({
    reducer : {
        auth : authSlice,
        },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;