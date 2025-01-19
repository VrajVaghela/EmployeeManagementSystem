import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        try {
            const { employees: storedEmployees } = getLocalStorage();
            setEmployees(storedEmployees);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }, []);

    const updateEmployees = (newEmployees) => {
        setEmployees(newEmployees);
        setLocalStorage({ employees: newEmployees });
    };

    const contextValue = {
        employees,
        setEmployees: updateEmployees
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;