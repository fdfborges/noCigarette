import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import Sondagem from "./pages/Sondagem/Sondagem.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

// 1. Importe o AuthProvider que você criou
import { AuthProvider } from "./hooks/useUserName.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sondagem" element={<Sondagem />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;