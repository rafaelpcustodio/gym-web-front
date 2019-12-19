import React from 'react';
import styled from 'styled-components';

const StyledUserInfo = styled.div`
  background-color: #eee;
  border-radius: 5px;
  color: #ff6544;
  display: inline-block;
  font-weight: bold;
`;

const UserInfo = () => {
  return (
    <StyledUserInfo>
      <div>Informações do Usuário</div>
    </StyledUserInfo>
  );
};

export { UserInfo };
