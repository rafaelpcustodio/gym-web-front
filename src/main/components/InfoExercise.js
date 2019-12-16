import React from 'react';
import PropTypes from 'prop-types';

const InfoExercise = ({ exercise }) => {
  return (
    <div>
      <li>{`Exercício: ${exercise.name}`}</li>
      <li>{`Peso: ${exercise.weight} kg`}</li>
      <li>{`Séries: ${exercise.series} ciclos`}</li>
      <li>{`Grupo muscular: ${exercise.group}`}</li>
      <li>{`Nível de dificuldade: ${exercise.level}`}</li>
    </div>
  );
};

InfoExercise.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  exercise: PropTypes.object.isRequired,
};

export default InfoExercise;
