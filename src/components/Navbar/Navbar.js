import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ROUTES } from '../../router';
import { Link } from 'react-router-dom';
import logo from '../../logo-ironhack-blue.png';
function Nav({ user }) {
  return (
    <Navbar className='nav' variant='dark'>
      <Container>
        <Navbar.Brand>
          {' '}
          <Link to='/'>
            <img width='60px' src={logo} alt='ironhack logo' />
          </Link>
        </Navbar.Brand>
        <Link to='/task'>create new Task</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='nav-text'>
            Signed in as: {user?.email}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
