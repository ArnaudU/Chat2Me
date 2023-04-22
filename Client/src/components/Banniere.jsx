import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Research from './Research';

const Banniere = () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <header className={(isAuth ? "banniereMain banniere main" : "banniereFormulaire banniere main")}>
            < h1 > Chat&Tweet</h1 >
            {
                (!isAuth &&
                    <>
                        <NavLink to="/inscription" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <button>Inscription</button>
                        </NavLink>
                        <NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <button>Connexion</button>
                        </NavLink>
                    </>
                ) ||
                <Research />
            }
        </header >

    );
};
export default Banniere;