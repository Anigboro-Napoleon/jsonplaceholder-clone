import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const res = await axios.get(url)
    let { data } = res
    return data
})

export const postUsers = createAsyncThunk('user/postUsers', async (user) => {
    const res = await axios.post(url, user)
    let { data } = res
    return data
})

export const deleteUsers = createAsyncThunk('user/deleteUsers', async (id) => {
    await axios.get(`${url}/${id}`)
    return id
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        builder.addCase(deleteUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = state.users.filter(user => user.id !== action.payload)
        })
        builder.addCase(postUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = [...state.users, action.payload]
        })
    }
})

export default userSlice.reducer
