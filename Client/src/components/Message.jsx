import React, { useState, useEffect } from 'react';
import coeur_icon from '../assets/img/coeur.svg';
import msg_icon from '../assets/img/message.svg';
import del_icon from '../assets/img/poubelle.svg'
import set_msg_icon from '../assets/img/setMessage.svg'
import retweet_icon from '../assets/img/retweet.svg'
import profil_icon from '../assets/img/profil.svg'
import { getUser, getUsername } from '../services/UserApi'
import { deleteMessage, getMessage, likeMessage, retweetMessage } from '../services/PostApi';

const Message = (props) => {
    const [nbRetweet, setNbRetweet] = useState(props.nbRetweet)
    const [date] = useState(props.created)
    const [nbResponse, setNbResponse] = useState(props.nbResponse)
    const [aRt, setARt] = useState(props.aRt)
    const [nbLike, setNbLike] = useState(props.nbLike)
    const [aLike, setALike] = useState(props.aLike)
    const [userLogged, setUserLogged] = useState({});

    useEffect(() => {
        const fetchedUser = getUser();
        setUserLogged(fetchedUser);
    }, []);

    const formattedDate = new Date(date).toLocaleString('fr-FR', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    const handleDeleteClick = () => {
        // Logique pour supprimer le message ici
        console.log(props.id)
        deleteMessage(props.id)
            .then((response) => {
                if (response) {
                    window.location.reload()
                }

            })
    };

    function refreshMessage(response) {
        if (response) {
            getMessage(props.id)
                .then((post) => {
                    setNbLike(post.like.length);
                    setALike(post.like.includes(getUsername()));
                    setNbRetweet(post.retweet.length);
                    setARt(post.retweet.includes(getUsername()));
                    setNbResponse(post.response.length)
                })
                .catch((error) => console.log(error));
        }
    }

    function handleLikeClick(event) {
        likeMessage(props.id)
            .then((response) => {
                refreshMessage(response)
            })
    }

    function handleRtClick(event) {
        retweetMessage(props.id)
            .then((response) => {
                refreshMessage(response)
            })
    }

    function handleMessageID() {
        console.log("la")
    }

    function changeUser() {
        window.location.replace(`/user/${props.username}`)
    }

    return (
        <div className='message' >
            <section >
                <div className='contains' onClick={handleMessageID}>
                    <div className="top_container">
                        <img onClick={changeUser} id="profil" src={profil_icon} alt="Profil" />
                        <h2 >@{props.username}</h2>
                        {((userLogged.user === props.username) &&
                            <div className="setMessage">
                                <img src={set_msg_icon} alt="set" />
                                <img src={del_icon} alt="delete" id="delete" onClick={handleDeleteClick} />
                            </div>
                        )
                            ||
                            (<>
                                <div>
                                    <img alt='' src='' id="delete" style={{ visibility: "hidden" }} />
                                    <img alt='' src='' id="delete" style={{ visibility: "hidden" }} />
                                </div>
                            </>)
                        }
                    </div>
                    <p >{props.content}</p>
                </div>

                <ul>
                    <li>
                        <img id="message" src={msg_icon} alt="Commentaire" />
                        <span>{nbResponse}</span>
                    </li>
                    <li>
                        <img className={aRt ? "retweetcolor" : ""} id='nbRetweet' src={retweet_icon} alt="retweet" onClick={handleRtClick} />
                        <span>{nbRetweet}</span>
                    </li>
                    <li >
                        <img className={aLike ? "likecolor" : ""} id='nbLike' src={coeur_icon} alt="like" onClick={handleLikeClick} />
                        <span >{nbLike}</span>

                    </li>

                    <li>
                        <div className='date'>
                            <span>{formattedDate}</span>
                        </div>
                    </li>
                </ul>
            </section >

        </div>

    )
}


export default Message;