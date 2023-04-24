import React, { useState } from 'react';
import { logout } from '../services/AuthApi'
import { changeBio, getUsername } from '../services/UserApi';

const Setting = () => {

    const [bio, setBio] = useState('');
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