import React from 'react';
import Banniere from '../components/Banniere';
import Asside from '../components/NavBar';
import SettingContext from '../components/SettingContext';
const Reglage = (props) => {

    return (
        <div>
            <Banniere theme={props.theme} />

            <Asside />
            <SettingContext />
        </div>
    );
};

export default Reglage;