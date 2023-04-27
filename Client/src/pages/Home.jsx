import React from 'react';
import ListMessage from '../components/ListMessage';
import { useEffect, useState } from 'react';
import { getMessagesFromAllFollower, getRecentPost } from '../services/PostApi';

const Home = () => {
    const [posts, setPosts] = useState(null)
    const [postAbo, setPostAbo] = useState(true)
    useEffect(() => {
        if (postAbo) {
            getMessagesFromAllFollower()
                .then(response => {
                    setPosts(response)
                })
                .catch(error => {
                    setPosts(error)
                })
        }
        else {
            getRecentPost()
                .then(response => {
                    setPosts(response)
                })
                .catch(error => {
                    setPosts(error)
                })
        }

    }, [postAbo]);
    if (posts === null) {
        return < div >Chargement</div>;
    }

    return (
        <div className='home main'>
            <div className="menu-horizontal">
                <ul>
                    <li className={postAbo ? "underlined" : ""}>
                        <p onClick={() => setPostAbo(true)}>Abonnement</p>
                    </li>
                    <li className={postAbo ? "" : "underlined"}>
                        <p onClick={() => setPostAbo(false)}>Actualité</p>
                    </li>
                </ul>
            </div>
            <ListMessage posts={posts} />

        </div>
    );
};

export default Home;