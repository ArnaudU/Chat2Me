import React, { useState } from 'react';
import ListMessage from "../components/ListMessage"
const ProfilBody = () => {
    const [nbFollowed, setNbFollowed] = useState(0);
    const [nbFollower, setNbFollower] = useState(0);
    const [bio, setBio] = useState("");
    const [listMessage, setListMessage] = useState("");

    return (
        <div className='profilBody'>
            <form >
                <button>Suivre</button>
                <p id='identifiant'>@identifiant</p>
                <p>Nom Prénom</p>
                <p id='bio'>Bio</p>
                <p id='nbFollowed'>Nombre d'abonnés : {nbFollowed}</p>
                <p id='nbFollower'>Nombre d'abonnements : {nbFollower}</p>

            </form>
            <ListMessage />
        </div>
    );
}

export default ProfilBody;
