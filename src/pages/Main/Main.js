import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navbar } from '../../components/Navbar';
import { Tasks } from '../Tasks';
import Button from 'react-bootstrap/Button';
export const Main = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div>
      <Navbar user={user} />

      <h2>All Tasks</h2>
      <Tasks />

      <Button variant='danger' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Main;
