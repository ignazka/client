import React from 'react';
import { ROUTES } from '.';
import { AuthRoute, GuestRoute } from '.';
import { Auth } from '../pages/Auth';
import { Main } from '../pages/Main';
import { TaskDetails } from '../pages/TaskDetails/TaskDetails';
import { AuthForm, TaskForm } from '../components/TaskForm';
import { Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Switch>
      <AuthRoute exact path='/task'>
        <TaskForm />
      </AuthRoute>
      <AuthRoute exact path='/tasks/:taskID'>
        <TaskDetails />
      </AuthRoute>
      <GuestRoute exact path='login'>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute exact path='/signup'>
        <Auth />
      </GuestRoute>
      <AuthRoute exact path='/'>
        <Main />
      </AuthRoute>
    </Switch>
  );
}

export default AppRouter;
