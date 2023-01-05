import { Routes, Route } from "react-router-dom"
import './App.css';
import ContactUs from "./components/contact-us/ContactUs";
import Donation from "./components/donation/Donation";
import Gallery from "./components/gallery/Gallery";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Volunteer from "./components/volunteer/Volunteer";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

    </div>
  );
}

export default App;
