import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../assets/img/home.svg';
import engrenage from '../assets/img/engrenage.svg';
import profil from '../assets/img/profil.svg';
import deconnexion from '../assets/img/cross.svg';
import plus from '../assets/img/plus.svg';
import AuthContext from '../context/AuthContext';
import { getUser } from '../services/UserApi'
import { logout } from '../services/AuthApi'
import logo from '../assets/img/logo.png'
import loupe from '../assets/img/loupe.svg'

const Sidebar = () => {
    const { isAuth } = useContext(AuthContext);
    let userId;
    try {
        userId = getUser().user
    }
    catch { }

    async function handleLogout() {
        try {
            await logout()
            window.location.reload()
        }
        catch {

        }
    }
    return (
        isAuth && <>
            <aside className="sidebar">
                <ul>
                    <NavLink to="/" id="first">
                        <img src={logo} alt="logo WorldBird" />
                    </NavLink>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img id='home' src={home} alt="Accueil" />
                    </NavLink>
                    <NavLink to="/search" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img src={loupe} alt="logo WorldBird" />
                    </NavLink>
                    <NavLink to={`/user/${userId}`} className={(nav) => (nav.isActive ? "nav-active grow" : "grow")} >
                        <img src={profil} alt="Profil" />
                    </NavLink>
                    <NavLink id='reglage' to="/reglage" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img src={engrenage} alt="Settings" />
                    </NavLink>
                    <NavLink id='tweet' to="/tweet" className={(nav) => (nav.isActive ? "nav-active grow" : "grow")}>
                        <img src={plus} alt="" />
                    </NavLink>
                    <NavLink to="" className="grow">
                        <img id="deconnexion" src={deconnexion} alt="Deconnecter" onClick={handleLogout} />
                    </NavLink>
                </ul>
            </aside >
        </>

    );
};

export default Sidebar;