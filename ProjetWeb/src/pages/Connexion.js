import React, { useState } from 'react';
import Banniere from '../components/Banniere';

function FormulaireConnexion() {
    const [login, setLogin] = useState('');
    const [mdp, setMdp] = useState('');

    function onChangeSetLogin(event) {
        event.preventDefault();
        setLogin(event.target.value)
    }

    function onChangeSetMdp(event) {
        event.preventDefault();
        setMdp(event.target.value)
    }

    function connect(event) {
        event.preventDefault();
        // IL faut faire un get http ici
    }

    return (
        <div className='formulaire'>
            <h1>Connexion</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input type="text" onChange={onChangeSetLogin} autoComplete="current-username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Mot de passe
                    </label>
                    <input type="password" onChange={onChangeSetMdp} autoComplete="current-password" />
                </div>
                <ul>
                    <button id="btnConnexion" onClick={connect}>Connecter</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
            </form>
        </div>
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