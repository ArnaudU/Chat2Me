import React, { useEffect, useState } from 'react';
import { getListFollow } from '../services/FollowApi';
import { useParams } from 'react-router-dom';
import Chargement from '../pages/Chargement'
import Profil from '../components/Profil';
const ListProfil = (props) => {
    const { id } = useParams();
    const [profils, setProfils] = useState()

    useEffect(() => {
        getListFollow(id, props.which)
            .then((res) => {
                setProfils(res)
            })
    }, [props.which, id])

    if (!profils) {
        return (<Chargement />)
    }
    return (
        <div className='main profilBody'>
            <h1 id="pageName">Liste des {props.which === "following" ? "abonnenements" : "abonnées"} de @{id}</h1>
            {profils.map((profil) =>
                <Profil
                    key={profil._id}
                    user={profil[props.which]}
                />
            )}
        </div>
    );
};

export default ListProfil;