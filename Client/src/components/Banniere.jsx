import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Research from '../pages/Research';

const Banniere = (props) => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        <header className={(isAuth ? "banniere" : "banniereFormulaire")}>
            {/* Les images importées depuis la balise IMG son accessibles dans "public" */}

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