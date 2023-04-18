import Message from './Message';
import { useState } from 'react';
import { getUsername } from '../services/UserApi';
//variable pour récuperer une liste de message

const ListMessage = (props) => {
    const [posts] = useState(props.posts)
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
                    aLike={post.like.includes(getUsername())}
                    aRt={post.retweet.includes(getUsername())}
                    created={post.createdAt}
                />
            )}
        </div >
    );
};

export default ListMessage;