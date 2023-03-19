import React, { useState } from 'react';
import ListMessage from "../components/ListMessage"

const Profil = (props) => {

    const [nbFollower, setFollower] = useState(props.nbFollower)
    const [nbFollowed, setFollowed] = useState(props.nbFollowed)
    const [aFollow, setAFollow] = useState(props.aFollow)

    function followOnClick(event) {
        event.preventDefault()
        if (aFollow) {
            setFollower(nbFollower - 1)
        }
        else {
            setFollower(nbFollower + 1)
        }
        setAFollow(!aFollow)
    }

    return (
        <div className='profilBody'>
            <form >
                <button onClick={followOnClick}>{aFollow ? "Retirer" : "Suivre"}</button>
                <p id='identifiant'>@{props.id}</p>
                <p>{props.name}</p>
                <p id='bio'>{props.bio}</p>
                <p id='nbFollowed'>Nombre d'abonnés : {nbFollower}</p>
                <p id='nbFollower'>Nombre d'abonnements : {nbFollowed}</p>

            </form>
            <ListMessage />
        </div>
    );
}

export default Profil;