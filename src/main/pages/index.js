import React, { useEffect, useState } from 'react';
import api from '../api';
import { parseJwt } from '../../utils/function';

import { Container } from '../components/Container';
import { ToolBar } from '../../components/ToolBar';
import { ImageContainer } from '../components/ImageContainer';
import InfoExercise from '../components/InfoExercise';

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

  return (
    <>
      <ToolBar />
      {exercises.length > 0 &&
        exercises.map(exercise => {
          return (
            <Container>
              <ImageContainer>{exercise.urlImage}</ImageContainer>
              <InfoExercise exercise={exercise} />
            </Container>
          );
        })}
    </>
  );
};

export default Main;
