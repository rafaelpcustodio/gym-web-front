import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
  border-radius: 10px;
  border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 10px 15px;
  width: 450px;
`;

export { Input };
