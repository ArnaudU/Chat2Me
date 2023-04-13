import React from 'react';
import { useState } from 'react';
import coeur_icon from '../assets/img/coeur.svg';
import msg_icon from '../assets/img/message.svg';
import retweet_icon from '../assets/img/retweet.svg'
import profil_icon from '../assets/img/profil.svg'

const Message = (props) => {
    const [nbRetweet, setRt] = useState(props.nbRetweet)
    const [date] = useState(props.created)
    const [nbResponse] = useState(props.nbResponse)
    const [aRt, setaRt] = useState(false)
    const [nbLike] = useState(props.nbLike)
    const [aFav] = useState(false)
    const formattedDate = new Date(date).toLocaleString('fr-FR', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    function favOnClick(event) {
        event.preventDefault();

    }


    function rtOnClick(event) {
        event.preventDefault();
        if (!aRt) {
            setRt(nbRetweet + 1)
            setaRt(true)

        }
        else {
            setRt(nbRetweet - 1)
            setaRt(false)
        }
    }

    function MessageBody() {
        return (
            <section>
                <div className='contains'>
                    <div className="usernameId">
                        <img id="profil" src={profil_icon} alt="Profil" />
                        <h2 >@{props.username}</h2>
                    </div>

                    <p >{props.content}</p>
                </div>

                <ul>
                    <li>
                        <img id="msg" src={msg_icon} alt="Commentaire" />
                        <span>{nbResponse}</span>
                    </li>
                    <li>
                        <img className={aRt ? "rtcolor" : ""} id='nbRetweet' src={retweet_icon} alt="Rt" onClick={rtOnClick} />
                        <span>{nbRetweet}</span>
                    </li>
                    <li >
                        <img className={aFav ? "favcolor" : ""} id='fav' src={coeur_icon} alt="Like" onClick={favOnClick} />
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