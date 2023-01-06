import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = "http://localhost:8000"

export const registerUser = createAsyncThunk(
    'auth/register', //string action type.
    
    async ({fullName, email, password, userName}, {rejectWithValue}) => {
        try{
            await axios.post(
                `${baseUrl}/signup`,
                {
                    fullName,
                    userName,
                    email,
                    password,
                }
            )
        }catch(error){
            return rejectWithValue(error)
        }
    }
)

export const userSignIn = createAsyncThunk(
    'auth/signin',
    async ({email, password}, {rejectWithValue}) => {
        try{
            const {data} = await axios.post(
                `${baseUrl}/signin`,
                {
                    email, 
                    password,
                }
            )
            localStorage.setItem('token', data.token)
            return data;
        }catch(error){
            return rejectWithValue(error)
        }
    }
)