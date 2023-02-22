import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Profil from "./pages/Profil";
import Reglage from './pages/Reglage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/reglage' element={<Reglage />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;