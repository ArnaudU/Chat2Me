import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Banniere = (props) => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        <header className={'banniere'}>
            {/* Les images importées depuis la balise IMG son accessibles dans "public" */}
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <img src="./logo.png" alt="logo WorldBird" />
            </NavLink>
            <h1>WorldBird{props.theme}</h1>
            <ul>
                {(!isAuth &&
                    <>
                        <NavLink to="/inscription" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <button>Inscription</button>
                        </NavLink>
                        <NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <button>Connexion</button>
                        </NavLink>
                    </>
                )
                }

            </ul>

        </header>

    );
};
export default Banniere;