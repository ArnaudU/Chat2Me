import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Message from '../components/Message';
import { createResponse, getAllResponse, getPost } from '../services/PostApi';
import PageNotFound from './PageNotFound';
import { getUsername } from '../services/UserApi';
import ListMessage from '../components/ListMessage';

const MessageID = () => {
    const { msgid } = useParams()
    const [post, setPost] = useState()
    const [response, setResponse] = useState()
    const [write, setWrite] = useState("")

    useEffect(() => {
        getPost(msgid)
            .then((res) => {
                if (!res) {
                    return (<PageNotFound />)
                }
                setPost(res)
            })
            .then(() => {
                getAllResponse(msgid)
                    .then((res) => {
                        setResponse(res)
                    })
            })
    }, [msgid])

    function handleResponse() {
        createResponse(msgid, { content: write })
            .then((res) => {
                if (res) {
                    window.location.reload()
                }
            })
    }

    function handleBack() {
        if (post.reference) {
            window.location.replace(`/message/${post.reference}`)
        }
        else {
            window.location.replace("/")
        }
    }

    return (
        <main className="main">
            <span className='fleche' alt="arriere" onClick={handleBack}>&#8592;</span>
            < div className='Message_base'>
                {
                    post && <Message
                        key={post._id}
                        id={post._id}
                        username={post.username}
                        content={post.content}
                        nbLike={post.like.length}
                        nbRetweet={post.retweet.length}
                        nbResponse={post.response.length}
                        aLike={post.like.includes(getUsername())}
                        aRt={post.retweet.includes(getUsername())}
                        created={post.createdAt} />
                }
            </div>
            <div className='repondre'>
                <textarea
                    type='text'
                    id='bio'
                    placeholder="Tweetez votre réponse..."
                    value={write}
                    onChange={(e) => setWrite(e.target.value)}
                />
                <button onClick={handleResponse}>Répondre</button>
            </div>

            <div className='response'>
                {response && <ListMessage posts={response} />}
            </div>
        </main >
    );
};

export default MessageID;