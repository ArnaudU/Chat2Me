import React, { useState } from 'react';
import Banniere from '../components/Banniere';

function FormulaireConnexion() {
    const [login, setLogin] = useState('');
    const [mdp, setMdp] = useState('');
    const [reessaye, setReessaye] = useState(0)

    function connect(event) {
        event.preventDefault();
        // IL faut faire un get http ici
    }

    return (
        <div className='formulaire'>
            <h1>Connexion</h1>
            <form action="/connexion" method="post">
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
                <div id='redirection'>
                    Vous n'avez pas de compte ? <a href="/inscription">Inscrivez-vous</a>.
                </div>
            </form>
        </div >
    );
}


const Connexion = () => {
    return (
        <div>
            <Banniere />
            <FormulaireConnexion />
        </div>
    );
};

export default Connexion;