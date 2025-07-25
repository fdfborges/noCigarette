import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import Sondagem from "./pages/Sondagem/Sondagem.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sondagem" element={<Sondagem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
