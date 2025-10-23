import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AdminRoute = () => {
  const { user } = useAuth();
  
  // This component's only job is to check if the user is an admin.
  // If they are, it renders the <Outlet />, which represents the
  // nested admin pages defined in your App.jsx file.
  return user && user.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;

