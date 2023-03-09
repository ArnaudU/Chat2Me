import React from 'react';
import Banniere from '../components/Banniere';
import Asside from '../components/Asside';

const ReglageBody = () => {
    return (
        <div>
            <p> Changer de mot de passe</p>
            <p>Changer la bio</p>
            <p>Se deconnecter</p>
        </div>
    );
};
const Reglage = () => {
    return (
        <div>
            <Banniere />
            <Asside />
            <ReglageBody />
        </div>
    );
};

export default Reglage;