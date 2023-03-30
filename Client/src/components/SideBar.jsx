import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../assets/img/home.png';
import loupe from '../assets/img/loupe.svg';
import engrenage from '../assets/img/engrenage.svg';
import profil from '../assets/img/profil.svg';
import deconnexion from '../assets/img/deconnexion.svg';
import plus from '../assets/img/plus.svg';
import AuthContext from '../context/AuthContext';

const Sidebar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        isAuth && <>
            <aside className="sidebar">
                <ul>
                    <NavLink to="/" id="first">
                        <img src="./logo.png" alt="logo WorldBird" />
                    </NavLink>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img id='home' src={home} alt="Accueil" />
                    </NavLink>
                    <NavLink to="/user/me" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")} >
                        <img src={profil} alt="Profil" />
                    </NavLink>
                    <NavLink to="/recherche" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img src={loupe} alt="Recherche" />
                    </NavLink>
                    <NavLink id='reglage' to="/reglage" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img src={engrenage} alt="Settings" />
                    </NavLink>
                    <NavLink id='tweet' to="/tweet" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img src={plus} alt="" />
                    </NavLink>
                    <NavLink to="" className="grow">
                        <img id="deconnexion" src={deconnexion} alt="Deconnecter" />
                    </NavLink>

                </ul>
            </aside >
        </>

    );
};

export default Sidebar;