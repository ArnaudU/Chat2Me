import React, { useState } from 'react';
import coeur from '../assets/img/coeur.png';

const Message = () => {
    const [id, setId] = useState("Bastien")
    const [date, setDate] = useState(new Date());
    const [fav, setFav] = useState(0)
    const [aFav, setaFav] = useState(false)
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

    function Post() {
        return (
            <section>
                <div className='contains'>
                    <h3 >@{id}</h3>
                    <p >{message}</p>
                </div>

                <ul>
                    <li id='fav'>
                        <img src={coeur} alt="Bouton j'aime" onClick={favOnClick} />
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
        <main className='message'>
            <ul>
                <Post />
            </ul>
        </main>
    );
};

const ListMessage = () => {
    return (
        <div>
            <Message />
            <Message />
        </div>
    );
};

export default ListMessage;