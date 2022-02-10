import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROUTES } from '.';
function GuestRoute({ children, ...restProps }) {
  const { user } = useAuth();

  if (user) {
    return <Redirect to={ROUTES.main} />;
  }
  return <Route {...restProps}>{children}</Route>;
}

export default GuestRoute;
