import React from 'react';

const InfoExercise = ({ exercise }) => {
  return (
    <>
      <li>{exercise.name}</li>
      <li>{exercise.weight}</li>
      <li>{exercise.series}</li>
      <li>{exercise.group}</li>
      <li>{exercise.level}</li>
    </>
  );
};

export default InfoExercise;
