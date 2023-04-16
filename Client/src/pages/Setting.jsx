import React, { useState } from 'react';
import { logout } from '../services/AuthApi'
import { changeBio, getUsername } from '../services/UserApi';

const Setting = () => {
    // états pour les champs de formulaire
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [bio, setBio] = useState('');


    // fonction pour gérer la soumission du formulaire de changement de mot de passe
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // envoyer la demande de modification de mot de passe à l'API
        console.log(`Changer le mot de passe à ${newPassword}`);
        // réinitialiser les champs
        setPassword('');
        setNewPassword('');
    };

    // fonction pour gérer la soumission du formulaire de changement de bio

    // fonction pour gérer la déconnexion de l'utilisateur
    async function handleLogout() {
        try {
            await logout()
            window.location.reload()
        }
        catch {

        }
    }
    // fonction pour gérer la soumission du formulaire de changement de bio
    function handleBioSubmit() {
        changeBio(bio)
            .then((response) => {
                if (response) {
                    window.location.replace(`user/${getUsername()}`);
                }
            })
    }

    return (
        <div className='reglageBody main'>
            <h1>Réglages</h1>
            <form onSubmit={handlePasswordSubmit}>
                <h2>Changer le mot de passe</h2>
                <div>
                    <label htmlFor='password'>Mot de passe actuel :</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='new-password'>Nouveau mot de passe :</label>
                    <input
                        type='password'
                        id='new-password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Modifier</button>
            </form>
            <form>
                <h2>Changer la bio</h2>
                <div>
                    <label htmlFor='bio'>Nouvelle bio :</label>
                    <textarea
                        type='text'
                        id='bio'
                        placeholder="Ecrivez votre bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <button onClick={handleBioSubmit} >Modifier</button>
            </form >
            <button onClick={handleLogout}>Se déconnecter</button>
        </div >
    );
};

export default Setting;