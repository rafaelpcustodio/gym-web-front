import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import moment from 'moment';
import { api, deleteRequest } from '../api';
import { parseJwt } from '../../utils/function';
import history from '../../_config/history';

import logo from '../../assets/imgs/magma-logo.png';
import DeleteButton from '../components/DeleteButton';
import { ExerciseContainer } from '../components/ExerciseContainer';
import { ToolBar } from '../../components/ToolBar';
import { ImageContainer } from '../components/ImageContainer';
import InfoExercise from '../components/InfoExercise';
import CreateExerciseButton from '../components/CreateExerciseButton';
import MainContainer from '../components/MainContainer';

const NoExerciseText = styled.div`
  color: #ff6544;
  font-weight: bold;
  font-size: 14px;
  justify-content: center;
`;

const Main = () => {
  const [exercises, setExercises] = useState([]);
  const [date, setDate] = useState(new Date());

  const filterExercises = async (
    selectedDate = moment().format('YYYY-MM-DD')
  ) => {
    const token = localStorage.getItem('token');
    const tokenSolved = parseJwt(token);
    const { sub } = tokenSolved;
    const exercisesReturned = await api(token, sub, selectedDate);
    if (exercisesReturned !== undefined) {
      setExercises(exercisesReturned);
    }
  };

  useEffect(async () => {
    filterExercises();
  }, []);

  const handleFilterExerciseByDate = async selectedDate => {
    filterExercises(selectedDate);
  };

  const deleteSelectedExercise = async exerciseId => {
    const token = localStorage.getItem('token');
    const tokenSolved = parseJwt(token);
    const { sub } = tokenSolved;
    await deleteRequest(
      sub,
      exerciseId,
      token,
      moment(date).format('YYYY-MM-DD')
    );
    const index = exercises.findIndex(exercise => exercise.id === exerciseId);
    if (index !== -1) {
      setExercises(currentExercise =>
        currentExercise.filter((exercise, i) => index !== i)
      );
    }
  };

  const handleCreateExercise = e => {
    e.preventDefault();
    history.history.push('/exercises/create');
  };
  return (
    <>
      <ToolBar
        date={date}
        setDate={setDate}
        handleFilterExerciseByDate={handleFilterExerciseByDate}
      />
      <MainContainer>
        <CreateExerciseButton onClick={handleCreateExercise}>
          <div>Adicionar Exercício</div>
          <FaPlus />
        </CreateExerciseButton>
        {exercises && exercises.length > 0 ? (
          exercises.map(exercise => {
            return (
              <ExerciseContainer>
                <ImageContainer>{exercise.urlImage}</ImageContainer>
                <InfoExercise exercise={exercise} />
                <DeleteButton
                  id={exercise.id}
                  deleteSelectedExercise={deleteSelectedExercise}
                />
              </ExerciseContainer>
            );
          })
        ) : (
          <ExerciseContainer>
            <NoExerciseText>{`Parece que você não possui exercícios na data ${moment(
              date
            ).format(
              'DD/MM/YYYY'
            )}. Que tal criar alguns exercícios?`}</NoExerciseText>
            <img src={logo} alt="magma" height="250" width="250" />
          </ExerciseContainer>
        )}
      </MainContainer>
    </>
  );
};

export default Main;
