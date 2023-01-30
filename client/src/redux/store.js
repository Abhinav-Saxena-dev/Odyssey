import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice/authSlice';
import logger from 'redux-logger'
import blogSlice from './blogSlice/blogSlice';


const store = configureStore({
    reducer : {
        auth : authSlice,
        blog : blogSlice,
        },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;