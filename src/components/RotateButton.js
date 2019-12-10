import styled, { css, keyframes } from 'styled-components';

import { Button } from './Button';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotateButton = styled(Button).attrs(props => ({
  disabled: props.loading,
}))`
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
