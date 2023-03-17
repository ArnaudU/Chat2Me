import React from 'react';
import Asside from '../components/NavBar';
import Banniere from '../components/Banniere';
import ProfilBody from '../components/ProfilContext'
const Profil = () => {
    return (
        <div>
            <Banniere />
            <Asside />
            <ProfilBody nbFollowed={0} nbFollower={0} aFollow={false} />
        </div>
    );
};

export default Profil;