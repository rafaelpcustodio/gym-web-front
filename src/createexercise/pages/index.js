import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { Form } from '../../components/Form';
import { Container } from '../components/Container';
import { EXERCISES_TYPE } from '../../constants/exercises';

const CreateExercise = () => {
  const handleExerciseCreate = async e => {
    e.preventDefault();
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  console.log(EXERCISES_TYPE);
  return (
    <Container>
      <Form onSubmit={handleExerciseCreate}>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Choose your exercise</DropdownToggle>
          <DropdownMenu right />
          {EXERCISES_TYPE.map(exercise => (
            <DropdownItem>{exercise}</DropdownItem>
          ))}
        </Dropdown>
      </Form>
    </Container>
  );
};

export default CreateExercise;
