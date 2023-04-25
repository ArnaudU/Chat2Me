import React, { useEffect, useState } from 'react';
import { getUser, getUserProfilInfo, getUsername } from '../services/UserApi';
import { addfollow, deletefollow } from '../services/FollowApi';
import PageNotFound from '../pages/PageNotFound';

const Profil = (props) => {
    const [id] = useState(props.user)
    let [followers, setFollowers] = useState([])
    let [following, setFollowing] = useState([])
    let [userFound, setUserFound] = useState(true)
    let [name, setName] = useState()
    let [bio, setBio] = useState()
    const [aFollow, setAFollow] = useState()
    const [actualise, setActualise] = useState(true)

    useEffect(() => {
        getUserProfilInfo(id)
            .then(info => {
                if (info) {
                    setFollowers(info.followers)
                    setFollowing(info.following)
                    setName(info.name)
                    setBio(info.bio)
                    const result = info.followers.find(follower => follower.follower === getUsername())
                    setAFollow(result)
                    setUserFound(true)
                }
                else {

                    setUserFound(false)
                }
            })
            .catch(error => {
                console.log(error)
                setUserFound(false)
            })
    }, [id, actualise])

    async function followOnClick(event) {
        event.preventDefault();
        let reussi;
        if (!aFollow) {
            reussi = await addfollow(id)
        }
        else {
            reussi = await deletefollow(id)
        }
        if (reussi) {
            setAFollow(!aFollow)
            setActualise(!actualise)
        }
    }

    function handleFollowerList() {
        window.location.replace(`/follower/${id}`)
    }

    function handleFollowingList() {
        window.location.replace(`/following/${id}`)
    }

    if (!userFound) {
        return (
            <PageNotFound />
        );
    }

    return (
        <div>
            <form >
                {
                    (id !== getUser().user)
                    &&
                    <button onClick={followOnClick}>
                        {aFollow ? "Retirer" : "Suivre"}
                    </button>
                }
                <h1>{name}</h1>
                <h3 id='identifiant'>@{id}</h3>
                <p id='bio'>{bio}</p>
                <div className="row">
                    <p onClick={handleFollowerList} id='nbFollower'>{followers.length} Abonnées</p>
                    <p onClick={handleFollowingList} id='nbFollowed'>{following.length} Abonnements</p>
                </div>

            </form>
        </div >
    );
};

export default Profil;