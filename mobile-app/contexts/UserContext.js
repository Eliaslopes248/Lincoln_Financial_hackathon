import React, { createContext, useContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Login function
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Update user data
  const updateUser = (userData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...userData
    }));
  };

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    updateUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
