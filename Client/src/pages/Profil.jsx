import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListMessage from "../components/ListMessage"
import { getUser, getUserProfilInfo } from '../services/UserApi';
import Chargement from './Chargement';
import PageNotFound from './PageNotFound'
import { getPostsFromId } from '../services/PostApi';
import { follow } from '../services/FollowApi';
const Profil = (props) => {

    const { id } = useParams();
    let [followers, setFollowers] = useState([])
    let [following, setFollowing] = useState([])
    let [userFound, setUserFound] = useState(true)
    let [bio, setBio] = useState()
    let [posts, setPosts] = useState()
    const [aFollow] = useState()

    useEffect(() => {
        getPostsFromId(id)
            .then((response) => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
                setUserFound(false)
            })
    }, [id])

    console.log(id)

    function getUserInfo() {
        getUserProfilInfo(id)
            .then(info => {
                if (info) {
                    setFollowers(info.followers)
                    setFollowing(info.following)
                    setBio(info.bio)
                    setUserFound(true)
                }
                else {
                    setUserFound(false)
                }
            })
            .catch(() => {
                setUserFound(false)
            })
    }

    if (!userFound) {
        return (
            <PageNotFound />
        );
    }

    if (!followers || !following || posts === null) {
        return (
            <Chargement />
        )
    }

    function followOnClick() {
        follow(id)
            .then((res) => {
                if (res) {
                    getUserInfo()
                }
            })
    }
    return (
        <div className='profilBody main'>
            <form >
                {
                    (id !== getUser().user)
                    &&
                    <button onClick={followOnClick}>
                        {aFollow ? "Retirer" : "Suivre"}
                    </button>

                }<h1 id='identifiant'>@{id}</h1>
                <p>{props.name}</p>
                <h2 id='bio'>{bio}</h2>
                <p id='nbFollowed'>Nombre d'abonnés : {followers.length}</p>
                <p id='nbFollower'>Nombre d'abonnements : {following.length}</p>

            </form>
            {posts && <ListMessage posts={posts} />}
        </div >
    );
}

export default Profil;