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
    return (
        < div >
            {posts.map((post) =>
                < Message
                    key={post._id}
                    username={post.username}
                    content={post.content}
                    fav={post.like.length}
                    rt={post.retweet.length}
                />
            )
            }
        </div >
    );
};

export default ListMessage;