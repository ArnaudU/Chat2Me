import React from 'react';
import { useState } from 'react';
import coeur_icon from '../assets/img/coeur.svg';
import msg_icon from '../assets/img/message.svg';
import retweet_icon from '../assets/img/retweet.svg'

const Message = (props) => {
    const [id, setId] = useState("UneEtrangePersonne")
    const [date, setDate] = useState(new Date());
    const [rt, setRt] = useState(0)
    const [aRt, setaRt] = useState(false)
    const [fav, setFav] = useState(0)
    const [aFav, setaFav] = useState(false)
    const Reponse = useState({});

    const [message, setMessage] = useState(
        "La vie est une aventure passionnante remplie de hauts et de bas. Parfois, il faut faire face à des défis difficiles, mais cela peut nous aider à grandir et à apprendre. Il est important de profiter des moments de bonheur et de les savourer pleinement. "
    )

    function favOnClick(event) {
        event.preventDefault();
        if (!aFav) {
            setFav(fav + 1);
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
            setRt(rt + 1);
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
                    <h2 >@{props.id}</h2>
                    <p >{props.message}</p>
                </div>

                <ul>
                    <li>
                        <img id="msg" src={msg_icon} alt="Commentaire" />
                    </li>
                    <li id='retweet' className='compteur'>
                        <img id='rt' src={retweet_icon} alt="Rt" onClick={rtOnClick} />
                        <span>{rt}</span>

                    </li>
                    <li id='fav' className='compteur'>
                        <img src={coeur_icon} alt="Like" onClick={favOnClick} />
                        <span>{fav}</span>

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