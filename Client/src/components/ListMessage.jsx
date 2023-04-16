import Message from './Message';
import api from '../Api';
import { useEffect, useState } from 'react';
//variable pour récuperer une liste de message

const ListMessage = (props) => {
    const [posts, setPosts] = useState(props.posts)
    return (
        < div >
            {posts.map((post) =>
                < Message
                    key={post._id}
                    id={post._id}
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