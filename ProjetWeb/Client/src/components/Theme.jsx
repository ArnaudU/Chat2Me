import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(ThemeContext);

    const handleCheckboxChange = (event) => {
        setTheme(!theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, handleCheckboxChange }}>
            <div className='theme'>
                <span>Actuellement en mode {theme ? "Sombre" : "Clair"}</span>
                <input type="checkbox" id="toggle" onChange={handleCheckboxChange} checked={theme ? true : false}></input>
                <label htmlFor="toggle" ></label>
            </div>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
