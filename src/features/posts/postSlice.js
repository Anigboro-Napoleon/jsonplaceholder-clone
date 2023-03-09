import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const res = await axios.get(url)
    let { data } = res
    return data
})

export const postPosts = createAsyncThunk('post/postPosts', async (post) => {
    const res = await axios.post(url, post)
    let { data } = res
    return data
})

export const deletePosts = createAsyncThunk('post/deletePosts', async (id) => {
    await axios.get(`${url}/${id}`)
    return id
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false                
            state.posts = action.payload
            state.error = ''
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error.message
        })
        builder.addCase(deletePosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = state.posts.filter(post => post.id !== action.payload)
        })
        builder.addCase(postPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = [...state.posts, action.payload]
        })
    }
})

export default postSlice.reducer