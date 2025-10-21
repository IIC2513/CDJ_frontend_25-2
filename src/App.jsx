import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import AboutUs from "./pages/AboutUs/AboutUs";
import Explora from "./pages/Explora/Explora";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Instructions from "./pages/Instructions/Instructions";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/explora" element={<Explora />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/explora" element={<Explora />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
