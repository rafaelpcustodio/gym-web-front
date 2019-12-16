import React from 'react';
import PropTypes from 'prop-types';

import { EXERCISES_TYPE } from '../../constants/exercises';
import { DIFICULTIES_TYPE } from '../../constants/dificulties';

const InfoExercise = ({ exercise }) => {
  return (
    <div>
      <li>{`Exercício: ${exercise.name}`}</li>
      <li>{`Peso: ${exercise.weight} kg`}</li>
      <li>{`Séries: ${exercise.series} ciclos`}</li>
      <li>{`Grupo muscular: ${EXERCISES_TYPE[exercise.group]}`}</li>
      <li>{`Nível de dificuldade: ${DIFICULTIES_TYPE[exercise.level]}`}</li>
    </div>
  );
};

InfoExercise.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  exercise: PropTypes.object.isRequired,
};

export default InfoExercise;
