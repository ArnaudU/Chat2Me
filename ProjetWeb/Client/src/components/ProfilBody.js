import React, { useState } from 'react';

const ProfilBody = () => {
    const [nbFollowed, setNbFolowed] = useState(0);
    const [nbFollower, setnbFollower] = useState(0);
    const [bio, setBio] = useState("");
    const [listMessage, setListMessage] = useState("");

    return (
        <div className='profil'>
            <button>Suivre</button>
            <p>@identifiant</p>
            <p>nom prenom?</p>
            <p>bio?</p>
            <p>Nombre d'abonne</p>
            <p>Nombre d'abonnement</p>
            <ul>ListMessage qu'il a ecrit </ul>

        </div>
    );

}

export default ProfilBody;