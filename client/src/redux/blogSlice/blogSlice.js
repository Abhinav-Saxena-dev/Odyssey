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
    reducers : {
        setCurrentBlog : (state, {payload}) => {
            state.currentBlog = payload
        },
        resetCurrentBlog : (state) => {
            state.currentBlog = null
        }
    }
})

export const {setCurrentBlog, resetCurrentBlog} = blogSlice.actions

export default blogSlice.reducer;