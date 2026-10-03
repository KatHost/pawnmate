import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.png'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contract from "./components/Contract";
import Footer from "./components/Footer";
import AnimatedBackground from './components/AnimatedBackground'
import FloatingWhatsApp from "./components/FloatingWhatsApp";



function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contract />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
