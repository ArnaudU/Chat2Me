import React from 'react';
import Asside from '../components/NavBar';
import Banniere from '../components/Banniere';
import SendMessage from '../components/SendMessage';
const Tweet = () => {
    return (
        <div>
            <Banniere />
            <Asside />
            <SendMessage />
        </div>
    );
};

export default Tweet;