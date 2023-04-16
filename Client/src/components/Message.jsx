import React, { useState, useEffect } from 'react';
import coeur_icon from '../assets/img/coeur.svg';
import msg_icon from '../assets/img/message.svg';
import del_icon from '../assets/img/poubelle.svg'
import set_msg_icon from '../assets/img/setMessage.svg'
import retweet_icon from '../assets/img/retweet.svg'
import profil_icon from '../assets/img/profil.svg'
import { getUser } from '../services/UserApi'
import { deleteMessage } from '../services/PostApi';

const Message = (props) => {
    const [nbRetweet] = useState(props.nbRetweet)
    const [date] = useState(props.created)
    const [nbResponse] = useState(props.nbResponse)
    const [aRt] = useState(false)
    const [nbLike] = useState(props.nbLike)
    const [aFav] = useState(false)
    const [userLogged, setUserLogged] = useState({});
    const [showOptions, setShowOptions] = useState(false);

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
        second: 'numeric',
    });

    const handleButtonClick = () => {
        console.log("la")
        setShowOptions(!showOptions);
    };

    const handleDeleteClick = () => {
        // Logique pour supprimer le message ici
        deleteMessage(props.msg)
    };

    const handleEditClick = () => {
        // Logique pour modifier le message ici
    };

    function handleFavClick(event) {
        event.preventDefault();

    }

    function handleRtClick(event) {
        event.preventDefault();

    }

    function MessageBody() {
        return (
            <section>
                <div className='contains'>
                    <div className="top_container">
                        <img id="profil" src={profil_icon} alt="Profil" />
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
                                    <img id="delete" style={{ visibility: "hidden" }} />
                                    <img id="delete" style={{ visibility: "hidden" }} />
                                </div>
                            </>)
                        }

                    </div>

                    <p >{props.content}</p>
                </div>

                <ul>
                    <li>
                        <img id="msg" src={msg_icon} alt="Commentaire" />
                        <span>{nbResponse}</span>
                    </li>
                    <li>
                        <img className={aRt ? "rtcolor" : ""} id='nbRetweet' src={retweet_icon} alt="Rt" onClick={handleRtClick} />
                        <span>{nbRetweet}</span>
                    </li>
                    <li >
                        <img className={aFav ? "favcolor" : ""} id='fav' src={coeur_icon} alt="Like" onClick={handleFavClick} />
                        <span >{nbLike}</span>

                    </li>

                    <li>
                        <div className='date'>
                            <span>{formattedDate}</span>
                        </div>
                    </li>
                </ul>
            </section >

        );
    }

    return (
        <div className='message'>
            <ul>
                <MessageBody />
            </ul>
        </div>
    );
};

export default Message;