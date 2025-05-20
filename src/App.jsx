import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import AboutSection from './components/AboutSection';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      
    </>
  );
}

export default App;
