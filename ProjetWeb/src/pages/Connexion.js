import React from 'react';
import Header from '../components/Header';

const FormulaireConnexion = () => {
    return (
        <div className='formulaire'>
            <h1>Connexion</h1>
            <form action="" method="POST">
                <div className="form-group">
                    <label for="login">
                        Login
                    </label>
                    <input type="text" name="login" />
                </div>
                <div className="form-group">
                    <label for="password">
                        Mot de passe
                    </label>
                    <input type="password" name="password" />
                </div>
                <ul>
                    <button type="submit" id="btnConnexion">Connecter</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
            </form>
        </div>
    );
}


const Connexion = () => {
    return (
        <div>
            <Header />
            <FormulaireConnexion />
        </div>
    );
};

export default Connexion;