import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Barbers from "./Pages/Barbers";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import Feedback from "./Pages/Feedback";
import Contacts from "./Pages/Contacts";

function App() {
  const basename =
    process.env.NODE_ENV === "development" ? "/" : "/razor_and_style";
  console.log(`Basename is set to: ${basename}`);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
