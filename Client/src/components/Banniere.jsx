import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Research from './ResearchUser';

const Banniere = () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <header className={(isAuth ? "banniereMain banniere main" : "banniereFormulaire banniere ")}>
            < h1 > Chat&Tweet</h1 >
            {
                (!isAuth &&
                    <>
                        <NavLink to="/inscription" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <button id="insc">Inscription</button>
                        </NavLink>
                        <NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <button id="connex">Connexion</button>
                        </NavLink>
                    </>
                ) ||
                <Research content={"Recherche d'utilisateur..."} />
            }
        </header >

    );
};
export default Banniere;