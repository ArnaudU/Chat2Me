import React from 'react';
import { useState } from 'react';
import coeur_icon from '../assets/img/coeur.svg';
import msg_icon from '../assets/img/message.svg';
import retweet_icon from '../assets/img/retweet.svg'

const Message = (props) => {
    const [date, setDate] = useState(new Date());
    const [rt, setRt] = useState(props.rt)
    const [aRt, setaRt] = useState(false)
    const [fav, setFav] = useState(props.fav)
    const [aFav, setaFav] = useState(false)
    const Reponse = useState({});

    function favOnClick(event) {
        event.preventDefault();
        if (!aFav) {
            setFav(fav + 1)
            setaFav(true)
        }
        else {
            setFav(fav - 1)
            setaFav(false)
        }
    }

    function rtOnClick(event) {
        event.preventDefault();
        if (!aRt) {
            setRt(rt + 1)
            setaRt(true)

        }
        else {
            setRt(rt - 1)
            setaRt(false)
        }
    }

    function MessageBody() {
        return (
            <section>
                <div className='contains'>
                    <h2 >@{props.username}</h2>
                    <p >{props.content}</p>
                </div>

                <ul>
                    <li>
                        <img id="msg" src={msg_icon} alt="Commentaire" />
                    </li>
                    <li>
                        <img className={aRt ? "rtcolor" : ""} id='retweet' src={retweet_icon} alt="Rt" onClick={rtOnClick} />
                        <span>{rt}</span>
                    </li>
                    <li >
                        <img className={aFav ? "favcolor" : ""} id='fav' src={coeur_icon} alt="Like" onClick={favOnClick} />
                        <span >{fav}</span>

                    </li>

                    <li>
                        <div className='date'>
                            <span>Le</span>
                            <span>{date.toLocaleDateString()}</span>

                            <span>{date.toLocaleTimeString()}</span>
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