import React, { useState } from 'react';

const Research = () => {
    const [userSearch, setSearchTerm] = useState('');
    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        window.location.replace(`/user/${userSearch}`)
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recherche..." value={userSearch} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Rechercher</button>
        </form>
    );
};

export default Research;