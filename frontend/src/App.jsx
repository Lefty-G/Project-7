import './components/styles/main.scss'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Home from './pages/home'
import CreatePost from './pages/create-post'
import Menu from './pages/menu'
import Profile from './pages/profile'
import GetOnePost from './pages/get-one-post'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StateProvider } from './store';
import { store } from './store.js';
import { useContext } from 'react';


function App() {
  const { state } = useContext(store);
  // const userDetails = useContext(store).state.userDetails


  return (
    <div className="App">

      {/* <React.StrictMode> */}
        <StateProvider>
          <BrowserRouter>           
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              {/* <Route path="/home" element={state.userDetails ? <Home /> : <Navigate to="/" />} /> */}
              <Route path ='/home' element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/menu" element={<Menu />} />
              <Route path={`/profile/:id`} element={<Profile />} />
              <Route path={`/get-post/:id`} element={<GetOnePost />} />
            </Routes>
          </BrowserRouter>
        </StateProvider>
      {/* </React.StrictMode> */}


    </div>
  );
}

export default App;


// Guard 
{/* <Route path="/home" element={state.userDetails ? <Home /> : <Navigate to="/" />} /> */}