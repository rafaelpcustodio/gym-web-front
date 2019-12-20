import React, { useState } from 'react';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Form } from '../../components/Form';
import { Container } from '../components/Container';

const CreateExercise = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleExerciseCreate = async e => {
    e.preventDefault();
  };
  console.log(dropdownOpen);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Container>
      {' '}
      <Form onSubmit={handleExerciseCreate}>
        <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Dropright</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Form>
    </Container>
  );
};

export default CreateExercise;
