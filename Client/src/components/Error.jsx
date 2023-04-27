import React, { useContext } from 'react';
import { ErrorContext } from '../context/ErrorContext';

const Error = () => {
    const { error } = useContext(ErrorContext);
    return (
        <div className='main'>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Error;