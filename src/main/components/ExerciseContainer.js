import styled from 'styled-components';

const ExerciseContainer = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  display: flex;
  max-height: 200px;
  padding: 30px;
  max-width: 800px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  button {
    border: 1px solid #eee;
    border-radius: 10px;
    margin-left: 20rem;
    margin-bottom: 8rem;
  }

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

export { ExerciseContainer };
