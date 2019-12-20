import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import moment from 'moment';
import { api, deleteRequest } from '../api';
import { parseJwt } from '../../utils/function';
import history from '../../_config/history';

import DeleteButton from '../components/DeleteButton';
import { ExerciseContainer } from '../components/ExerciseContainer';
import { ToolBar } from '../../components/ToolBar';
import { ImageContainer } from '../components/ImageContainer';
import InfoExercise from '../components/InfoExercise';
import CreateExerciseButton from '../components/CreateExerciseButton';
import MainContainer from '../components/MainContainer';

const Main = () => {
  const [exercises, setExercises] = useState([]);
  const [date, setDate] = useState(new Date());

  const filterExercises = async (
    selectedDate = moment().format('YYYY-MM-DD')
  ) => {
    console.log(selectedDate);
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
    console.log(selectedDate);
    filterExercises(selectedDate);
  };

  const deleteSelectedExercise = async exerciseId => {
    console.log(exerciseId);
    const token = localStorage.getItem('token');
    const tokenSolved = parseJwt(token);
    const { sub } = tokenSolved;
    await deleteRequest(
      sub,
      exerciseId,
      token,
      moment(date).format('YYYY-MM-DD')
    );
    const exerciseFound = exercises.find(
      exercise => exercise.id === exerciseId
    );
    const index = exercises.indexOf(exerciseFound);
    exercises.splice(index, 1);
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
            Opa parece que você não possui exercícios nesse dia. Vamos criar um?
          </ExerciseContainer>
        )}
      </MainContainer>
    </>
  );
};

export default Main;
