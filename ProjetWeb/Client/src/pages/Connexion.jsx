import React, { useState, useContext } from 'react';
import axios from 'axios';
import Banniere from '../components/Banniere';
import { UserProvider } from '../context/Utilisateur';

function FormulaireConnexion() {
    const [login, setLogin] = useState('');
    const [mdp, setMdp] = useState('');
    const [errorConnexion, setErrorConnexion] = useState("");

    async function connect(event) {
        event.preventDefault();
        try {
            window.location.href = "/";
        }
        catch (errorConnexion) {
            setErrorConnexion(errorConnexion.message)
        }
    }

    return (
        <div className='formulaire'>
            <h1>Connexion</h1>
            <form action="/connexion" method="POST" onSubmit={connect}>
                <div className="form-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input type="text" onChange={(e) => setLogin(e.target.value)} autoComplete="current-username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Mot de passe
                    </label>
                    <input type="password" onChange={(e) => setMdp(e.target.value)} autoComplete="current-password" />
                </div>
                <ul>
                    <button type="submit" >Connecter</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
                <h1 id="warning">{errorConnexion}</h1>
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
            <Banniere />
            <FormulaireConnexion />
        </div>
    );
};

export default Connexion;