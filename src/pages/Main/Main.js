import React from 'react';
import { useAuth } from '../../context/AuthContext';
export const Main = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
    </div>
  );
};

export default Main;
