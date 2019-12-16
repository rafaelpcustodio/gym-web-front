import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  padding: 30px;
  margin: 50px auto;

  li {
    list-style: none;
  }

  div {
    display: flex;
    left: 50px;
  }
`;

export { Container };
