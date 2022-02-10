import React from 'react';
import { ROUTES } from './constants';
import { useAuth } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';
function AuthRoute({ children, ...restProps }) {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to={ROUTES.login} />;
  }

  return <Route {...restProps}>{children}</Route>;
}

export default AuthRoute;
