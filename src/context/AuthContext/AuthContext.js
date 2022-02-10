import React, { useContext } from 'react';
import { login, logout, signup, isLoggedIn } from '../../api';

function saveUser(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
  const user = sessionStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

function removeUser() {
  sessionStorage.removeItem('user');
}

export const AuthCtx = React.createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState({ user: getUser() });

  const handleSignup = async credentials => {
    try {
      const { data } = await signup(credentials);
      setAuth({ user: data });
      saveUser(data);
    } catch (error) {
      setAuth({ user: null });
      return { error: error };
    }
  };

  const handleLogin = async credentials => {
    try {
      const { data } = await login(credentials);
      setAuth({ user: data });
      saveUser(data);
    } catch (error) {
      setAuth({ user: null });
      return { error: error };
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      removeUser();
    } catch (error) {
    } finally {
      setAuth({ user: null });
    }
  };

  const handleIsLoggedIn = async () => {
    try {
      if (!auth.user) {
        const { data } = await isLoggedIn();
        setAuth({ user: data });
        saveUser(data);
      }
    } catch (error) {
      setAuth({ user: null });
      return { error: error };
    }
  };

  React.useEffect(() => {
    handleIsLoggedIn();
  }, []);

  return (
    <AuthCtx.Provider
      value={{ ...auth, handleSignup, handleLogin, handleLogout }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthCtx);
}

export default AuthProvider;
