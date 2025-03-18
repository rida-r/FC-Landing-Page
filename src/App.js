import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Sponsorship from './pages/Sponsorship';
import Teams from './pages/Teams';
import Shows from './pages/Shows';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
    </Router>
  );
}

export default App;
