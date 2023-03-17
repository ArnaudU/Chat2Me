import React, { useState } from 'react';
import Banniere from '../components/Banniere';
import axios from 'axios';

const FormulaireInscription = () => {
    const [login, setLogin] = useState("")
    const [name, setName] = useState("")
    const [mdp, setMdp] = useState("")
    const [confirmer, setConfirmer] = useState("")
    const [error, setError] = useState("")

    function hasSpecialCharacters(str) {
        const regex = /[!@#$%^&*()_+-=[\]{};':"\\|,.<>?]/g;
        return regex.test(str);
    }

    async function register(event) {
        try {
            event.preventDefault();
            if (name.length === 0) {
                throw new Error("*Entrez le nom et prenom");
            }
            if (login.length <= 5) {
                throw new Error("*Il faut un login d'au moins 5 caractères");
            }
            if (confirmer !== mdp) {
                throw new Error("*Les deux mots de passe ne sont pas la meme")
            }
            if (mdp.length <= 8) {
                throw new Error("*Mot de passe trop court")
            }
            if (hasSpecialCharacters(name) || hasSpecialCharacters(login)) {
                throw new Error("*Pas de caractère spéciaux pour le nom et login")
            }

            setError("")
            // const data = {
            //     login: login,
            //     name: name,
            //     mdp: mdp
            // };
            // const response = await axios.post("url du post", data)
        }
        catch (erreur) {
            setError(erreur.message)
        }
    }

    return (
        <div className='formulaire'>
            <h1>Enregistrement</h1>
            <form action="/inscription" method="POST">
                <div className="form-group">
                    <label htmlFor="name">
                        Nom et Prenom
                    </label>
                    <input type="text" name="name" onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input type="text" name="login" onChange={(e) => {
                        e.preventDefault();
                        setLogin(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Mot de passe
                    </label>
                    <input type="password" name="password" onChange={(e) => {
                        e.preventDefault();
                        setMdp(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="retapper">
                        Retapper
                    </label>
                    <input type="password" name="retapper" onChange={(e) => {
                        e.preventDefault();
                        setConfirmer(e.target.value)
                    }} />
                </div>
                <ul>
                    <button onClick={register} id="btnConnexion">Enregistrer</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
                <h1 id="warning">{error}</h1>
                <div id='redirection'>
                    Vous avez un compte ? <a href="/connexion">Connectez-vous</a>.
                </div>
            </form>
        </div>
    );
}


const Inscription = () => {
    return (
        <div>
            <Banniere />
            <FormulaireInscription />
        </div>
    );
};


export default Inscription;