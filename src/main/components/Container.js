import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  display: flex;
  height: 200px;
  padding: 30px;
  max-width: 800px;
  margin: 50px auto;

  div {
    display: inline-block;
    padding: 20px 20px;
    li {
      line-height: 16px;
      list-style: none;
      padding: 5px;
      font-weight: bold;
    }
  }
`;

export { Container };
