import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import { LogoutButton } from './LogoutButton';
import { UserInfo } from './UserInfo';

import 'react-datepicker/dist/react-datepicker.css';

const StyledToolBar = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  display: inline-block;
  height: 38.5px;
  padding: 5px 5px;
  width: 100%;
  button {
    border: 1px solid #eee;
    border-radius: 10px;
    float: right;
  }
  input {
    border-radius: 4px;
    box-shadow: inset 0 2px 2px #e9e9e9;
    border: 1px solid #ff6544;
    font-size: 13px;
    line-height: 25px;
    padding-left: 5px;
    width: 184px;
  }
`;

const DateText = styled.div`
  background-color: #eee;
  border-radius: 4px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #ff6544;
  margin-left: 5.5rem;
  margin-right: 0.5rem;
`;

const ToolBar = ({ date, setDate, handleFilterExerciseByDate }) => {
  const handleDate = dateReceived => {
    console.log(dateReceived);
    setDate(dateReceived);
    handleFilterExerciseByDate(moment(dateReceived).format('YYYY-MM-DD'));
  };

  return (
    <StyledToolBar>
      <UserInfo />
      <DateText>Data: </DateText>
      <DatePicker
        selected={date}
        onChange={handleDate}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <LogoutButton />
    </StyledToolBar>
  );
};

export { ToolBar };
