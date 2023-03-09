import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/posts/postSlice'
import todoReducer from '../features/todos/todoSlice'
import userReducer from '../features/users/userSlice'
import commentReducer from '../features/comment/commentSlice'
import albumReducer from '../features/albums/albumSlice'
import photoReducer from "../features/photos/photoSlice";

const store = configureStore({
    reducer: {
        post: postReducer,
        todo: todoReducer,
        user: userReducer,
        comment: commentReducer,
        album: albumReducer,
        photo: photoReducer,
    }
})

export default store