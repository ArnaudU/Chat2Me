import React, { useState } from 'react';
import Banniere from '../components/Banniere';

const FormulaireInscription = () => {
    const [login, setLogin] = useState("")
    const [name, setName] = useState("")
    const [mdp, setMdp] = useState("")
    const [confirmer, setConfirmer] = useState("")
    function onChangeSetName(event) {
        event.preventDefault();
        setName(event.target.value)
    }

    function onChangeSetLogin(event) {
        event.preventDefault();
        setLogin(event.target.value)
    }

    function onChangeSetMdp(event) {
        event.preventDefault();
        setMdp(event.target.value)
    }

    function onChangeSetConfirmer(event) {
        event.preventDefault();
        setConfirmer(event.target.value)
    }


    function register(event) {
        event.preventDefault();
        if (confirmer === mdp) {
            console.log("confirmer");
        }
        else {
            console.log("Pas le meme mdp")
        }
    }

    return (
        <div className='formulaire'>
            <h1>Enregistrement</h1>
            <form action="" method="POST">
                <div className="form-group">
                    <label htmlFor="name">
                        Nom et Prenom
                    </label>
                    <input type="text" name="name" onChange={onChangeSetName} />
                </div>
                <div className="form-group">
                    <label htmlFor="login">
                        Login
                    </label>
                    <input type="text" name="login" onChange={onChangeSetLogin} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Mot de passe
                    </label>
                    <input type="password" name="password" onChange={onChangeSetMdp} />
                </div>
                <div className="form-group">
                    <label htmlFor="retapper">
                        Retapper
                    </label>
                    <input type="password" name="retapper" onChange={onChangeSetConfirmer} />
                </div>
                <ul>
                    <button type="submit" id="btnConnexion" onClick={register}>Enregistrer</button>
                    <button type="reset" id="btnAnnuler">Annuler</button>
                </ul>
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