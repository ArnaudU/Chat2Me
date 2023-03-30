import React, { useState } from 'react';

const Research = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        Navigate("/")
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recherche..." value={searchTerm} onChange={handleInputChange} />
            <button>Rechercher</button>
        </form>
    );
};

export default Research;