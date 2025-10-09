import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";  
import Navbar from './components/Navbar/Navbar'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;