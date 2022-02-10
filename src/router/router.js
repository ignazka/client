import React from 'react';
import { ROUTES } from '.';
import { AuthRoute, GuestRoute } from '.';
import { Auth } from '../pages/Auth';
import { Main } from '../pages/Main';
import { Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path={ROUTES.login} exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path={ROUTES.signup} exact>
        <Auth />
      </GuestRoute>
      <AuthRoute path={ROUTES.main} exact>
        <Main />
      </AuthRoute>
    </Switch>
  );
}

export default AppRouter;
