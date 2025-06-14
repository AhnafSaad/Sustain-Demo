import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sustainSportsUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('sustainSportsUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    if (email === 'demo@sustainsports.com' && password === 'demo123') {
      const mockUser = {
        id: 'demo-user',
        name: 'Demo User',
        email: email,
        isAdmin: false 
      };
      setUser(mockUser);
      localStorage.setItem('sustainSportsUser', JSON.stringify(mockUser));
      return mockUser;
    }
    
    if (email === 'admin@sustainsports.com' && password === 'admin123') {
      const mockUser = {
        id: 'admin-user',
        name: 'Admin User',
        email: email,
        isAdmin: true
      };
      setUser(mockUser);
      localStorage.setItem('sustainSportsUser', JSON.stringify(mockUser));
      return mockUser;
    }

    const users = JSON.parse(localStorage.getItem('sustainSportsRegisteredUsers') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password); 

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('sustainSportsUser', JSON.stringify(foundUser));
      return foundUser;
    }
    
    throw new Error('Invalid credentials');
  };

  const register = async (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('sustainSportsRegisteredUsers') || '[]');
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      toast({
        title: "Registration Failed",
        description: "This email is already registered.",
        variant: "destructive",
      });
      throw new Error('User already exists');
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name: name,
      email: email,
      password: password, 
      isAdmin: false
    };
    
    users.push(newUser);
    localStorage.setItem('sustainSportsRegisteredUsers', JSON.stringify(users));
    
    setUser(newUser);
    localStorage.setItem('sustainSportsUser', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sustainSportsUser');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};