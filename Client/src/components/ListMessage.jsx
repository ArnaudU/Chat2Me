import Message from './Message';
import { useEffect, useState } from 'react';
import { getUsername } from '../services/UserApi';
//variable pour récuperer une liste de message

const ListMessage = (props) => {
    const [posts, setPost] = useState(props.posts)
    useEffect(() => {
        setPost(props.posts)
    }, [props.posts]);
    return (
        < main >
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
                    retweeted={post.retweeted}
                />
            )}
        </main >
    );
};

export default ListMessage;