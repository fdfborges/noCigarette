import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home/Home.jsx";
import Sondagem from "./pages/Sondagem/Sondagem.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sondagem" element={<Sondagem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
