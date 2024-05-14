import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';
import "./App.css"

function App() {
  return (
    <div className='app'>


      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App