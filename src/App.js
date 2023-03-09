import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostEl from './features/posts/PostEl';
import Body from './components/Body';
import Nav from './components/Nav';
// import Loading from './components/Loading';
import TodoEl from './features/todos/TodoEl';
import { JsonContextProvider } from './context';
import UserEl from './features/users/UserEl';
import CommentEl from './features/comment/CommentEl';
import AlbumEl from './features/albums/AlbumEl';
import PhotoEl from './features/photos/PhotoEl';
import { BasicUsage } from './components/Modal';

function App() {
  return (
    <div className="App">
      <JsonContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/posts' element={<PostEl />} />
            <Route path='/todos' element={<TodoEl />} />
            <Route path='/users' element={<UserEl />} />
            <Route path='/comments' element={<CommentEl />} />
            <Route path='/albums' element={<AlbumEl />} />
            <Route path='/photos' element={<PhotoEl />} />
          </Routes>
        </BrowserRouter>
      </JsonContextProvider>
    </div>
  );
}

export default App;
