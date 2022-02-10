import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { AuthForm } from '../../components/AuthForm';

function Auth({ isLogin }) {
  const { handleLogin, handleSignup } = useAuth();

  const onSubmit = isLogin ? handleLogin : handleSignup;
  const submitMessage = isLogin ? 'login' : 'signup';
  const buttonColor = isLogin ? 'success' : 'danger';

  return (
    <div>
      <AuthForm
        submitMessage={submitMessage}
        onSubmit={onSubmit}
        buttonColor={buttonColor}
      />
    </div>
  );
}

export default Auth;
