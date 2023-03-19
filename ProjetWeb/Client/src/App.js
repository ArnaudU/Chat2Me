import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from './context/AuthContext';
import Theme from './context/ThemeContext'
import { hasAuth } from './services/AuthApi';
import Navbar from './components/NavBar';
import Account from './components/Account';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Profil from "./pages/Profil";
import Setting from './pages/Setting';
import Research from './pages/Research';
import Tweet from './pages/Tweet';
import Banniere from './components/Banniere';
import { isSombre } from './services/ThemeApi';


const App = () => {
  const [isAuth, setIsAuth] = useState(hasAuth);
  const [isSombreMode, setIsSombreMode] = useState(isSombre)
  return (
    <Auth.Provider value={{ isAuth, setIsAuth }}>
      <Theme.Provider value={{ isSombreMode, setIsSombreMode }}>
        <Banniere />
        <Navbar />
        <Routes>
          <Route path='/' element={isAuth ? <Home /> : <Navigate replace to="/connexion" />} />
          <Route path='/inscription' element={!isAuth ? <Inscription /> : <Navigate replace to="/profil" />} />
          <Route path='/connexion' element={!isAuth ? <Connexion /> : <Navigate replace to="/profil" />} />
          <Route path='/recherche' element={isAuth ? <Research /> : <Navigate replace to="/connexion" />} />
          <Route path='/tweet' element={isAuth ? <Tweet /> : <Navigate replace to="/connexion" />} />
          <Route path='/reglage' element={isAuth ? <Setting /> : <Navigate replace to="/connexion" />} />
          <Route path='/profil' element={isAuth ? <Profil /> : <Navigate replace to="/connexion" />} />
          <Route path='/account' element={isAuth ? <Account /> : <Navigate replace to="/connexion" />} />
          <Route path='/*' element={<Navigate replace to="/connexion" />} />
        </Routes >

      </Theme.Provider>
    </Auth.Provider>
  );
};

export default App;