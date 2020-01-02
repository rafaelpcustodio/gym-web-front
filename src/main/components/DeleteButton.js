import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteButton = ({ id, deleteSelectedExercise }) => {
  const handleDeleteExercise = () => {
    deleteSelectedExercise(id);
  };
  return (
    <button onClick={handleDeleteExercise} type="button">
      <FaRegTrashAlt size={24} color="#ff6544" />
    </button>
  );
};

export default DeleteButton;
