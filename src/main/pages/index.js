import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import api from '../api';
import { parseJwt } from '../../utils/function';
import history from '../../_config/history';

import { ExerciseContainer } from '../components/ExerciseContainer';
import { ToolBar } from '../../components/ToolBar';
import { ImageContainer } from '../components/ImageContainer';
import InfoExercise from '../components/InfoExercise';
import CreateExerciseButton from '../components/CreateExerciseButton';
import MainContainer from '../components/MainContainer';

const Main = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(async () => {
    const token = localStorage.getItem('token');
    const tokenSolved = parseJwt(token);
    const { sub } = tokenSolved;
    const exercisesReturned = await api(token, sub);
    if (exercisesReturned !== undefined) {
      setExercises(exercisesReturned);
    }
  }, []);

  const handleCreateExercise = e => {
    e.preventDefault();
    history.history.push('/exercises/create');
  };

  return (
    <>
      <ToolBar />
      <MainContainer>
        <CreateExerciseButton onClick={handleCreateExercise}>
          <div>Adicionar Exercício</div>
          <FaPlus />
        </CreateExerciseButton>
        {exercises.length > 0 &&
          exercises.map(exercise => {
            return (
              <ExerciseContainer>
                <ImageContainer>{exercise.urlImage}</ImageContainer>
                <InfoExercise exercise={exercise} />
              </ExerciseContainer>
            );
          })}
      </MainContainer>
    </>
  );
};

export default Main;
