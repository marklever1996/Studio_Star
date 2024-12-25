import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Voeg hier andere routes toe wanneer nodig */}
      </Routes>
    </>
  );
}

export default App;