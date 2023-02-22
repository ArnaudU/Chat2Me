import React from 'react';
import Header from '../components/Header';

const FormulaireInscription = () => {
    return (
        <div className='formulaire'>
            <h1>Enregistrement</h1>
            <form action="" method="POST">
                <div className="form-group">
                    <label for="name">
                        Nom et Prenom
                    </label>
                    <input type="text" name="name" />
                </div>
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
                <div className="form-group">
                    <label for="retapper">
                        Retapper
                    </label>
                    <input type="password" name="retapper" />
                </div>
                <ul>
                    <button type="submit" id="btnConnexion">Enregistrer</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
            </form>
        </div>
    );
}


const Inscription = () => {
    return (
        <div>
            <Header />
            <FormulaireInscription />
        </div>
    );
};


export default Inscription;