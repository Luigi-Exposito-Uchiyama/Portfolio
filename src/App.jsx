import React from 'react';
import './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './General/Header';
import Footer from './General/Footer';
import Home from './Routes/Home';
import Work from './Routes/Work';
import Portfolio from './Routes/Portfolio';
import Contact from './Routes/Contact';
import Experience from './Routes/Experience';
import Education from './Routes/Education';
import Certificates from './Routes/Certificates';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
