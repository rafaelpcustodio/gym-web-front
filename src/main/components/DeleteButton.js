import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteButton = ({ id, deleteSelectedExercise }) => {
  const handleDeleteExercise = () => {
    console.log('aqui');
    console.log(id);
    deleteSelectedExercise(id);
  };
  console.log(id);
  console.log(deleteSelectedExercise);
  return (
    <button onClick={handleDeleteExercise} type="button">
      <FaRegTrashAlt size={24} color="#ff6544" />
    </button>
  );
};

export default DeleteButton;
