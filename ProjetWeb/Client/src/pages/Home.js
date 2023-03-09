import React from 'react';
import Asside from '../components/Asside';
import Banniere from '../components/Banniere';
import ListMessage from '../components/ListMessage';

const Home = () => {
    return (
        <div>
            <Banniere />
            <Asside />
            <ListMessage />
        </div>
    );
};

export default Home;