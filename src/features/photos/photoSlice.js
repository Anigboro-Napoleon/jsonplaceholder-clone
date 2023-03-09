import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/photos'

const initialState = {
    loading: false,
    photos: [],
    error: ''
}

export const fetchPhotos = createAsyncThunk('photo/fetchPhotos', async () => {
    const res = await axios.get(url)
    let { data } = res
    return data
})

export const postPhotos = createAsyncThunk('photo/postPhotos', async (photo) => {
    const res = await axios.post(url, photo)
    let { data } = res
    return data
})

export const deletePhotos = createAsyncThunk('photo/deletePhotos', async (id) => {
    await axios.delete(`${url}/${id}`)
    return id
})

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPhotos.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.loading = false
            state.photos = action.payload
            state.error = ''
        })
        builder.addCase(fetchPhotos.rejected, (state, action) => {
            state.loading = false
            state.photos = []
            state.error = action.error.message
        })
        builder.addCase(deletePhotos.fulfilled, (state, action) => {
            state.loading = false
            state.photos = state.photos.filter(photo => photo.id !== action.payload)
        })
        builder.addCase(postPhotos.fulfilled, (state, action) => {
            state.loading = false
            state.photos = [...state.photos, action.payload]
        })
    }
})

export default photoSlice.reducer