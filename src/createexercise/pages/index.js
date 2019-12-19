import React from 'react';

import { Form } from '../../components/Form';
import { Container } from '../components/Container';
import { Input } from '../../components/Input';

const CreateExercise = () => {
  const handleExerciseCreate = async e => {
    e.preventDefault();
  };
  return (
    <>
      <Container>
        {' '}
        <h1>Create your exercise</h1>
        <Form onSubmit={handleExerciseCreate}>
          <Input placeholder="Complete Name*" />
        </Form>
      </Container>
    </>
  );
};

export default CreateExercise;
