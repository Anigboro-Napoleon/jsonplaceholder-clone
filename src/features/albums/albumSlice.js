import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/albums'

const initialState = {
    loading: false,
    albums: [],
    error: ''
}

export const fetchAlbums = createAsyncThunk('album/fetchAlbums', async () => {
    const res = await axios.get(url)
    let { data } = res
    return data
})

export const postAlbums = createAsyncThunk('album/postAlbums', async (album) => {
    const res = await axios.post(url, album)
    let { data } = res
    return data
})

export const deleteAlbums = createAsyncThunk('album/deleteAlbums', async (id) => {
    await axios.delete(`${url}/${id}`)
    return id
})

const albumSlice = createSlice({
    name: 'album',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.loading = false
            state.albums = action.payload
            state.error = ''
        })
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.loading = false
            state.albums = []
            state.error = action.error.message
        })
        builder.addCase(deleteAlbums.fulfilled, (state, action) => {
            state.loading = false
            state.albums = state.albums.filter(album => album.id !== action.payload)
        })
        builder.addCase(postAlbums.fulfilled, (state, action) => {
            state.loading = false
            state.albums = [...state.albums, action.payload]
        })
    }
})

export default albumSlice.reducer

