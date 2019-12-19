import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  display: flex;
  height: 200px;
  padding: 30px;
  max-width: 800px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

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
