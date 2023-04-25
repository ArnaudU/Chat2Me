import React from 'react';
import { useState } from 'react';
import { searchMessage } from '../services/PostApi';
import ListMessage from '../components/ListMessage';

const ResearchMessage = () => {
    const [posts, setPosts] = useState([])
    async function handleChange(event) {
        searchMessage(event.target.value)
            .then((post) => {
                setPosts(post)

            })
    }
    return (
        <div className='main'>
            <form className='research border_bottom' >
                <input type="text" placeholder="Rechercher un mot" onChange={handleChange} />
            </form>
            <ListMessage posts={posts} />
        </div>

    );
};

export default ResearchMessage;