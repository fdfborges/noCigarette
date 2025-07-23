import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import './pages/Login.jsx';
import { Login } from './pages/Login.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
