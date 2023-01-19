import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const createBlog = createAsyncThunk(
    'blog/create',

    async ({blogContent, blogImage, blogTitle}, {rejectWithValue}) => {
        try{
            const blog = {
                blogContent,
                blogImage,
                blogTitle,
                numberOfLikes : 0,
                isPublished : false,
                comments : [],
                date : new Date(),
            }
        }
    }
)