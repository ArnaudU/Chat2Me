import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const handleLogin = (username, password) => {
        // Vérifier les identifiants de l'utilisateur et définir user en conséquence
        setUser({ username });
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

function useUser() {
    return useContext(UserContext);
}

export { UserProvider, useUser };
