import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Auth from '../context/AuthContext';
import { login } from '../services/AuthApi';

function FormulaireConnexion({ history }) {
    const [user, setUser] = useState({
        username: "",
        pwd: ""
    })
    const [errorAuth, setErrorAuth] = useState("");
    const { isAuth, setIsAuth } = useContext(Auth);

    function handleChange({ currentTarget }) {
        const { name, value } = currentTarget;

        setUser({ ...user, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.get("http://localhost:8000/api/login", { user })
            console.log(response.data)
            setIsAuth(response);
            history.replace('/profil');
        }
        catch (errorAuth) {
            setErrorAuth(errorAuth.message)
        }
    }

    return (
        <div className='formulaire'>
            <form onSubmit={handleSubmit}>
                <h1>Connexion</h1>
                <div className="form-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        placeholder="Login" />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">
                        Mot de passe
                    </label>
                    <input
                        type="pwd"
                        name="pwd"
                        onChange={handleChange}
                        placeholder="Mot de passe" />
                </div>
                <ul>
                    <button type="submit" >Connecter</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
                <h1 id="warning">{errorAuth}</h1>
                <div id='redirection'>
                    Vous n'avez pas de compte ? <a href="/inscription">Inscrivez-vous</a>.
                </div>
            </form>
        </div >
    );
}


const Connexion = (props) => {
    return (
        <div>
            <FormulaireConnexion />
        </div>
    );
};

export default Connexion;