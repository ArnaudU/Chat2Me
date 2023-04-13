import Message from './Message';
import api from '../Api';
import { useEffect, useState } from 'react';
//variable pour récuperer une liste de message

const ListMessage = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        api.get('/message/recent')
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => {
                setPosts(error)
            })
    }, []);
    if (posts === null) {
        return < div ></div>;
    }
    console.log(posts)
    return (
        < div >
            {posts.map((post) =>
                < Message
                    key={post._id}
                    username={post.username}
                    content={post.content}
                    nbLike={post.like.length}
                    nbRetweet={post.retweet.length}
                    nbResponse={post.response.length}
                    created={post.createdAt}
                />
            )
            }
        </div >
    );
};

export default ListMessage;