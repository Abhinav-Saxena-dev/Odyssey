import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    currentBlog : null,
    blogsInfo : [],
    erorr : null,
    success : false,
}

const blogSlice = createSlice({
    name : 'blog',
    initialState,
    reducers : {}
})