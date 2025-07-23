import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Login } from './pages/Login/Login.jsx';
import Sondagem from "./pages/Home/Sondagem.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Sondagem" element={<Sondagem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
