import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Card from "./components/card-con";
import Card2 from "./components/card2";
import Classes from "./pages/classes";
import { Filter } from "./components/filter";
import Best from "./components/best";
import Plans from "./pages/plans";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./pages/footer";
import Slider from "./components/slider";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes" element={<Classes />} />
        <Route path="Plans" element={<Plans />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
