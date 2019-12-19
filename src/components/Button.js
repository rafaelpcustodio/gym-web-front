import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff6544;
  border: 1px solid #eee;
  border-radius: 10px;
  color: #fff;
  padding: 10px 15px;
  margin: 2rem 2rem;
  width: 100px;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background-color: #f1a46f;
  }
`;

export { Button };
