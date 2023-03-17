import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from './context/Utilisateur';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Profil from "./pages/Profil";
import Setting from './pages/Setting';
import Research from './pages/Research';
import Tweet from './pages/Tweet';
import { theme, useTheme } from './components/Theme'
const App = () => {

  const context = useUser();
  const user = context && context.user;
  const theme = useTheme();
  console.log(theme)
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={user ? <Home theme={theme} /> : <Navigate replace to="/connexion" />} />
        <Route path='/profil' element={user ? <Profil /> : <Navigate replace to="/connexion" />} />
        <Route path='/reglage' element={user ? <Setting /> : <Navigate replace to="/connexion" />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/recherche' element={user ? <Research /> : <Navigate replace to="/connexion" />} />
        <Route path='/tweet' element={user ? <Tweet /> : <Navigate replace to="/connexion" />} /> */}

        <Route path='/' element={<Home />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/reglage' element={<Setting theme={theme} />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/recherche' element={<Research />} />
        <Route path='/tweet' element={<Tweet />} />
      </Routes>
    </Router>
  );
};

export default App;