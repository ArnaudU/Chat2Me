import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListMessage from "../components/ListMessage"
import { getProfilPost } from '../services/PostApi';
import Chargement from '../components/Chargement'
import Profil from '../components/Profil';
import PageNotFound from './PageNotFound';

const PageProfil = () => {
    const { id } = useParams();
    let [userFound, setUserFound] = useState(true)
    let [posts, setPosts] = useState()

    useEffect(() => {
        getProfilPost(id)
            .then((response) => {
                setPosts(response)
            })
            .catch(error => {
                console.log(error)
                setUserFound(false)
            })
    }, [id])


    if (posts === null) {
        return (
            <Chargement />
        )
    }
    if (!userFound) {
        return (
            <PageNotFound />
        );
    }
    return (
        <div className='profilBody main'>
            <div>
                <h1 id="pageName">Profil De {id}</h1>
            </div>

            <Profil user={id} />
            {posts && <ListMessage posts={posts} />}
        </div >
    );
}

export default PageProfil;