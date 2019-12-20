import styled from 'styled-components';

const CreateExerciseButton = styled.button`
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  color: #ff6544;
  font-size: 14px;
  height: 35px;
  margin-top: 50px;
  margin-bottom: 5px;
  width: 175px;
  div {
    display: inline-block;
    font-weight: bold;
    padding-right: 10px;
  }
  &:hover {
    background-color: #eee;
  }
`;

export default CreateExerciseButton;
