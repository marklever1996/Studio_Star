import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMe from './pages/AboutMe';
import ContactPage from './pages/ContactPage';
import Beauty from './components/categories/Beauty';
import Portraits from './components/categories/Portraits';
import Editorial from './components/categories/Editorial';
import FineArts from './components/categories/FineArts';
import Wedding from './components/categories/Wedding';
import Professional from './components/categories/Professional';
import Prints from './components/categories/Prints';
import Commercial from './components/categories/Commercial';
// Importeer hier de andere categorie componenten

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/finearts" element={<FineArts />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/commercial" element={<Commercial />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;