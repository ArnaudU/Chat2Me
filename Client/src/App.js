import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from './context/AuthContext';
import { hasAuth } from './services/AuthApi';
import SideBar from './components/SideBar';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Profil from "./pages/Profil";
import Setting from './pages/Setting';
import Tweet from './pages/Tweet';
import Banniere from './components/Banniere';

const App = () => {
  const [isAuth, setIsAuth] = useState(hasAuth);
  return (
    <Auth.Provider value={{ isAuth, setIsAuth }}>
      <Banniere />
      <SideBar />
      <Routes>
        <Route path='/' element={isAuth ? <Home /> : <Navigate replace to="/auth" />} />
        <Route path='/insc' element={!isAuth ? <Inscription /> : <Navigate replace to="/" />} />
        <Route path='/auth' element={!isAuth ? <Connexion /> : <Navigate replace to="/" />} />
        <Route path='/tweet' element={isAuth ? <Tweet /> : <Navigate replace to="/auth" />} />
        <Route path='/reglage' element={isAuth ? <Setting /> : <Navigate replace to="/auth" />} />
        <Route path='/user/:id' element={isAuth ? <Profil /> : <Navigate replace to="/auth" />} />
        <Route path='/*' element={<Navigate replace to="/auth" />} />
      </Routes >

    </Auth.Provider>
  );
};

export default App;