import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Header/LoginButton.js';
import Logout from '../Header/LogoutButton.js';

function AuthButtons() {

  const {
    isAuthenticated,
  } = useAuth0();

  return isAuthenticated ? <Logout /> : <Login />
}

export default AuthButtons;