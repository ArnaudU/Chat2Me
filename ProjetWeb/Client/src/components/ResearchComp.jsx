import React, { useState } from 'react';

const ResearchComp = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // TODO: envoyer la valeur de recherche à une fonction de traitement
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recherche..." value={searchTerm} onChange={handleInputChange} />
            <button>Rechercher</button>
        </form>
    );
};

export default ResearchComp;
