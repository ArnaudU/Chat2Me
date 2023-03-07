import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../assets/img/home.png';
import loupe from '../assets/img/loupe.png';
import engrenage from '../assets/img/engrenage.png';
import profil from '../assets/img/profil.png';
import deconnexion from '../assets/img/deconnexion.png';


const Asside = () => {
    return (
        <aside className="asside">
            <ul>
                <NavLink to="/" className="tab">
                    <img src={home} alt="Accueil" />
                </NavLink>
                <NavLink to="/profil" className="tab">
                    <img src={profil} alt="Profil" />
                </NavLink>
                <NavLink to="">
                    <img src={loupe} alt="Recherche" />
                </NavLink>
                <NavLink id='reglage' to="/reglage" className="tab">
                    <img src={engrenage} alt="Settings" />
                </NavLink>
                <NavLink to="">
                    <img src={deconnexion} alt="Deconnecter" />
                </NavLink>
            </ul>
        </aside>
    );
};

export default Asside;