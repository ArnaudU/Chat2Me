import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Profil from "./pages/Profil";
import Reglage from './pages/Reglage';
import Research from './pages/Research';
import Tweet from './pages/Tweet';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/reglage' element={<Reglage />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/recherche' element={<Research />} />
        <Route path='/tweet' element={<Tweet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;