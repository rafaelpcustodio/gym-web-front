import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.button`
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 0.875rem;
  height: 25px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const DropDown = () => {
  return (
    <StyledDropdown>
      <div>a</div>
    </StyledDropdown>
  );
};

export { DropDown };
