import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('userInfo');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // --- 1. ADDED: This effect automatically sets the auth token for all API requests ---
  useEffect(() => {
    if (user && user.token) {
      // If a user is logged in, set the default Authorization header for all future axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    } else {
      // If no user is logged in, remove the header
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [user]); // This effect runs whenever the user state changes

  const login = async (email, password) => {
    const { data } = await axios.post('/api/users/login', { email, password });
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
  };
  
  const register = async (name, email, password) => {
    const { data } = await axios.post('/api/users/register', { name, email, password });
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  const updateUserProfile = async (userData) => {
    const { data } = await axios.put('/api/users/profile', userData);
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
    return data;
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

