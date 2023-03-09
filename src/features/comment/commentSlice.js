import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/comments'

const initialState = {
    loading: false,
    comments: [],
    error: ''
}

export const fetchComments = createAsyncThunk('comment/fetchComments', async () => {
    const res = await axios.get(url)
    let { data } = res
    return data
})

export const postComments = createAsyncThunk('comment/postComments', async (comment) => {
    const res = await axios.post(url, comment)
    let { data } = res
    return data
})

export const deleteComments = createAsyncThunk('comment/deleteComments', async (id) => {
    await axios.delete(`${url}/${id}`)
    // console.log(res.data)
    return id
})

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
            state.error = ''
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loading = false
            state.comments = []
            state.error = action.error.message
        })
        builder.addCase(deleteComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments = state.comments.filter(comment => comment.id !== action.payload)
        })
        builder.addCase(postComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments.push(action.payload)
        })
    }
})

export default commentSlice.reducer