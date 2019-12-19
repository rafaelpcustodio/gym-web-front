import React from 'react';
import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

import history from '../_config/history';

const LogoutText = styled.div`
  color: #ff6544;
  float: right;
  font-weight: bold;
  justify-content: center;
  padding: 5px;
`;

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.clear();
    history.history.push('/login');
  };

  return (
    <button onClick={handleLogout} type="button">
      <LogoutText>Logout</LogoutText>
      <FiLogOut size={24} color="#ff6544" />
    </button>
  );
};

export { LogoutButton };
