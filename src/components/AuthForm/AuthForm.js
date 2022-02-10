import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ROUTES } from '../../router';
import { Link } from 'react-router-dom';

function AuthForm({ onSubmit, submitMessage, buttonColor }) {
  const [state, setState] = React.useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { error } = onSubmit(state);
    console.log(state);
    if (error) {
      console.error('error on Submit' + error.message);
    }
  };

  return (
    <div className='ctn-form'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='example@email.com'
            value={state.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='********'
            value={state.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button className='mt-3' type='submit' size='lg' variant={buttonColor}>
          {submitMessage}
        </Button>
        {submitMessage === 'login' ? (
          <p>
            Do not have an Account? <Link to={ROUTES.signup}>Signup</Link>
          </p>
        ) : (
          <p>
            Already have an Account? <Link to={ROUTES.login}>Login</Link>
          </p>
        )}
      </Form>
    </div>
  );
}

export default AuthForm;
