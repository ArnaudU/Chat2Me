import React from 'react';
import ListMessage from '../components/ListMessage';
import { useEffect, useState } from 'react';
import { getRecentPost } from '../services/PostApi';
const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getRecentPost()
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                setPosts(error)
            })
    }, []);
    if (posts === null) {
        return < div >Chargement</div>;
    }

    return (
        <div className='home main'>
            <ListMessage posts={posts} />
        </div>
    );
};

export default Home;