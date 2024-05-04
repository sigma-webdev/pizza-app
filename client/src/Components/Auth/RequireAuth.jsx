import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = ({ allowedRole }) => {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  const location = useLocation();

  return isLoggedIn && allowedRole.find(myRole > myRole === role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to={'/denied'} state={{ from: location }} replace />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

export default RequireAuth;
