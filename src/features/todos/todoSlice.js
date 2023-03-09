import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos'

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
    const res = await axios.get(url)
    let { data } = res
    return data
})

export const postTodos = createAsyncThunk('todo/postTodos', async (todo) => {
    const res = await axios.post(url, todo)
    let { data } = res
    return data
})

export const deleteTodos = createAsyncThunk('todo/deleteTodos', async (id) => {
    await axios.get(`${url}/${id}`)
    return id
})

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = action.payload
            state.error = ''
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false
            state.todos = []
            state.error = action.error.message
        })
        builder.addCase(deleteTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        })
        builder.addCase(postTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = [...state.todos, action.payload]
        })
    }
})

export default todoSlice.reducer