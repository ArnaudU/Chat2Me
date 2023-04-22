import { createContext } from 'react';

export const ErrorContext = createContext({
    error: "",
    setError: (value) => {
        return { error: value };
    }
});