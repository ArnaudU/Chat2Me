import React from 'react';
import Asside from '../components/NavBar';
import Banniere from '../components/Banniere';
import ListMessage from '../components/ListMessage';

const Home = (props) => {
    return (
        <div>
            <Banniere theme={props.theme} />
            <Asside />
            <ListMessage />
        </div>
    );
};

export default Home;