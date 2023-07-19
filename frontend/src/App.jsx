import './components/styles/index.scss';
import './components/styles/header.scss'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Header from './components/header'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <div className="App">

      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>


    </div>
  );
}

export default App;


