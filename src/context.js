import { createContext, useContext, useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { useSelector } from "react-redux";


const JsonContext = createContext()

export const JsonContextProvider = ({ children }) => {
    const post = useSelector(state => state.post)
    const todo = useSelector(state => state.todo)
    const user = useSelector(state => state.user)
    const comment = useSelector(state => state.comment)
    const album = useSelector(state => state.album)
    const photo = useSelector(state => state.photo)

    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 10
    const pagesVisited = pageNumber * usersPerPage
    const postPageCount = Math.ceil(post.posts.length / usersPerPage)
    const todoPageCount = Math.ceil(todo.todos.length / usersPerPage)
    const userPageCount = Math.ceil(user.users.length / usersPerPage)
    const commentPageCount = Math.ceil(comment.comments.length / usersPerPage)
    const albumPageCount = Math.ceil(album.albums.length / usersPerPage)
    const photoPageCount = Math.ceil(photo.photos.length / usersPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    const previous = <button><GrFormPrevious /></button>
    const next = <button><GrFormNext /></button>

    return <JsonContext.Provider 
        value={{
            post, pagesVisited, postPageCount, todoPageCount, changePage, previous, next, usersPerPage, todo, user, userPageCount, comment, commentPageCount, album, albumPageCount, photo, photoPageCount
        }}
    >
        {children}
    </JsonContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(JsonContext)
}