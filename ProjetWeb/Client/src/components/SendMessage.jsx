import React from 'react';

const SendMessage = () => {
    return (
        <div className='sendmessage'>
            <h1>Tweet</h1>
            <textarea placeholder="Quoi de neuf?"></textarea>
            <button>Envoyer</button>
        </div>
    );
};

export default SendMessage;