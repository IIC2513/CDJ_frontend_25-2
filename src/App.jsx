import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import AboutUs from "./pages/AboutUs/AboutUs";
import Explora from "./pages/Explora/Explora";
import MiPagina from "./pages/MiPagina/MiPagina";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Instructions from "./pages/Instructions/Instructions";
import Informaciones from "./pages/Informaciones/Informaciones"; 
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/explora" element={<Explora />} />
          <Route path="/mipagina" element={<MiPagina />} />
          <Route path="/informaciones" element={<Informaciones />} /> 
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Aliases  */}
          <Route path="/sign" element={<Navigate to="/signup" replace />} />
          <Route path="/signin" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Navigate to="/signup" replace />} />

          {/* 404 → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
