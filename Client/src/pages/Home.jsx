import React from 'react';
import ListMessage from '../components/ListMessage';

const Home = (props) => {

    console.log(window.localStorage);
    return (
        <div className='home main'>
            <ListMessage />
        </div>
    );
};

export default Home;