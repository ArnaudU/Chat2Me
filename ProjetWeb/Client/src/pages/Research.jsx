import React from 'react';
import Asside from '../components/NavBar';
import Banniere from '../components/Banniere';
import ResearchContext from '../components/ResearchContext';

const Research = () => {
    return (
        <div>
            <Banniere />
            <Asside />
            <ResearchContext />
        </div>
    );
};

export default Research;