import React, { useState } from 'react';

const ReglageBody = () => {
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
    const handleBioSubmit = (e) => {
        e.preventDefault();
        // envoyer la demande de modification de bio à l'API
        console.log(`Changer la bio à ${bio}`);
        // réinitialiser le champ
        setBio('');
    };

    // fonction pour gérer la déconnexion de l'utilisateur
    const handleDeconnexion = () => {
        // envoyer la demande de déconnexion à l'API
        console.log('Se déconnecter');
    };

    return (
        <div className='reglageBody'>
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
            <form onSubmit={handleBioSubmit}>
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
                <button type='submit'>Modifier</button>
            </form>
            <button onClick={handleDeconnexion}>Se déconnecter</button>
        </div>
    );
};

export default ReglageBody;
