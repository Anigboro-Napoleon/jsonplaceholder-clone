import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import { JsonContextProvider } from './context';
import React from 'react';
import Loading from './components/Loading';
// import Body from './components/Body';
// import PostEl from './features/posts/PostEl';
// import Loading from './components/Loading';
// import TodoEl from './features/todos/TodoEl';
// import UserEl from './features/users/UserEl';
// import CommentEl from './features/comment/CommentEl';
// import AlbumEl from './features/albums/AlbumEl';
// import PhotoEl from './features/photos/PhotoEl';
// import { BasicUsage } from './components/Modal';

const LazyBody = React.lazy(() => import('./components/Body'))
const LazyPostEl = React.lazy(() => import('./features/posts/PostEl'))
const LazyTodoEl = React.lazy(() => import('./features/todos/TodoEl'))
const LazyUserEl = React.lazy(() => import('./features/users/UserEl'))
const LazyCommentEl = React.lazy(() => import('./features/comment/CommentEl'))
const LazyAlbumEl = React.lazy(() => import('./features/albums/AlbumEl'))
const LazyPhotoEl = React.lazy(() => import('./features/photos/PhotoEl'))

function App() {
  return (
    <div className="App">
      <JsonContextProvider>
        <BrowserRouter>
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<LazyBody />} />
              <Route path='/posts' element={<LazyPostEl />} />
              <Route path='/todos' element={<LazyTodoEl />} />
              <Route path='/users' element={<LazyUserEl />} />
              <Route path='/comments' element={<LazyCommentEl />} />
              <Route path='/albums' element={<LazyAlbumEl />} />
              <Route path='/photos' element={<LazyPhotoEl />} />
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </JsonContextProvider>
    </div>
  );
}

export default App;
