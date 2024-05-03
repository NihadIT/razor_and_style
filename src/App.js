import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Services from "./Pages/Services";
import Barbers from './Pages/Barbers';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
