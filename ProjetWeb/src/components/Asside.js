import React from 'react';
import { NavLink } from 'react-router-dom';

const Asside = () => {
    return (
        <aside className="asside">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <img src="./home.png" alt="Accueil Logo" />
                </NavLink>
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <img src="./profil.png" alt="Profil Logo" />
                </NavLink>
                <NavLink to="">
                    <img src="./loupe.png" alt="Recherche Logo" />
                </NavLink>
                <NavLink id='reglage' to="/reglage" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <img src="./engrenage.png" alt="Settings Logo" />
                </NavLink>
            </ul>
        </aside>
    );
};

export default Asside;