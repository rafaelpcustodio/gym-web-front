import React from 'react';
import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

import history from '../_config/history';

const StyledToolBar = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  display: inline-block;
  height: 38.5px;
  padding: 5px 5px;
  width: 100%;
  button {
    align-items: center;
    border: 1px solid #eee;
    border-radius: 10px;
    float: right;
  }
`;

const LogoutText = styled.div`
  align-items: center;
  color: #ff6544;
  display: inline-block;
  float: right;
  font-weight: bold;
  justify-content: center;
  padding: 5px;
`;

const ToolBar = () => {
  const handleLogout = () => {
    localStorage.clear();
    history.history.push('/login');
  };

  return (
    <StyledToolBar>
      <button onClick={handleLogout} type="button">
        <LogoutText>Logout</LogoutText>
        <FiLogOut size={24} color="#ff6544" />
      </button>
    </StyledToolBar>
  );
};

export { ToolBar };
