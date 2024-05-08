import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  // Function to update userEmail
  const login = (email) => {
    setUserEmail(email);
  };

  // Function to clear userEmail
  const logout = () => {
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
