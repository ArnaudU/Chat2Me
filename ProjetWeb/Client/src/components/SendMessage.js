import React from 'react';

const SendMessage = () => {
    return (
        <div className='sendmessage'>
            <textarea placeholder='Écrivez votre message ici...'></textarea>
            <button>Envoyer</button>
        </div>
    );
};

export default SendMessage;