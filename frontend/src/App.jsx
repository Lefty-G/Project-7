import './components/styles/main.scss'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Home from './pages/home'
import CreatePost from './pages/create-post'
import Menu from './pages/menu'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './store';


function App() {
  return (
    <div className="App">

      <React.StrictMode>
        <StateProvider>
          <BrowserRouter>           
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </BrowserRouter>
        </StateProvider>
      </React.StrictMode>


    </div>
  );
}

export default App;


