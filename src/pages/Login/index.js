import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import apiBase from '../../services/api';

import { Form } from '../../components/Form';
import { Container } from '../../components/Container';
import { RotateButton } from '../../components/RotateButton';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { StyledNotification } from '../../components/StyledNotification';

import { CreateLoginLink } from './components/CreateLoginLink';

function Login() {
  const [message, setMessage] = useState('');
  const [toaster, setToaster] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputUsername, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleUsername = e => {
    setInputUserName(e.target.value);
  };

  const handlePassword = e => {
    setInputPassword(e.target.value);
  };

  const handleLogin = async e => {
    e.preventDefault();
    setError(false);
    if (inputPassword.length === 0 || inputUsername.length === 0) {
      setError(true);
      return;
    }
    setLoading(true);
    await apiBase
      .post(`/api/auth/signin`, {
        usernameOrEmail: inputUsername,
        password: inputPassword,
      })
      .then(response => {
        localStorage.setItem('token', response.data.accessToken);
        setLoading(false);
      })
      .catch(() => {
        setToaster(true);
        setMessage('User might not exist. Use a valid login');
        setLoading(false);
        setError(true);
      });
  };
  return (
    <Container>
      <h1>Login page</h1>
      <Form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={inputUsername}
          error={error}
          onChange={handleUsername}
        />
        <PasswordInput
          type="text"
          placeholder="Password"
          value={inputPassword}
          error={error}
          onChange={handlePassword}
        />
        <RotateButton loading={loading}>
          {loading ? <FaSpinner color="#FFF" size={14} /> : 'Login'}
        </RotateButton>
      </Form>
      <StyledNotification>{toaster ? `${message}` : ''}</StyledNotification>
      <CreateLoginLink href="/login/create">
        <a href="/login/create">Create your login</a>
      </CreateLoginLink>
    </Container>
  );
}

export default Login;
