import React, { useState } from 'react';
import { createMessage } from '../services/PostApi';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await createMessage({ content: message })
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='sendmessage'>
            <h1>Tweet</h1>
            <textarea
                placeholder="Quoi de neuf?"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Envoyer</button>
        </div>
    );
};

export default SendMessage;