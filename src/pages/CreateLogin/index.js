import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Exception } from 'handlebars';

import { FaSpinner } from 'react-icons/fa';

import apiBase from '../../services/api';

import { Form } from '../../components/Form';
import { Container } from '../../components/Container';
import { RotateButton } from '../../components/RotateButton';
import { EmailInput } from '../../components/EmailInput';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { StyledNotification } from '../../components/StyledNotification';

import { handleError } from '../../utils/http';

const CreateLogin = () => {
  const [message, setMessage] = useState('');
  const [toaster, setToaster] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputAddress, setInputAddress] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputUserName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordRepeated, setInputPasswordRepeated] = useState('');

  const handleNameChange = e => {
    setInputName(e.target.value);
  };

  const handleAddressChange = e => {
    setInputAddress(e.target.value);
  };

  const handleEmailChange = e => {
    setInputEmail(e.target.value);
  };

  const handleUsernameChange = e => {
    setInputUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setInputPassword(e.target.value);
  };

  const handlePasswordRepeatedChange = e => {
    setInputPasswordRepeated(e.target.value);
  };

  const handleLoginCreate = async e => {
    e.preventDefault();
    try {
      setErrorEmail(false);
      setErrorName(false);
      setErrorPassword(false);
      setErrorUsername(false);
      setLoading(true);

      if (inputPassword !== inputPasswordRepeated) {
        setErrorPassword(true);
        throw new Exception('Password must be identical.');
      }

      if (inputPassword.length < 6 || inputPasswordRepeated.length < 6) {
        setErrorPassword(true);
        throw new Exception('Password must contain at least 6 chracters.');
      }

      if (inputUserName.length < 4) {
        setErrorUsername(true);
        throw new Exception('Username must contain at least 4 chracters.');
      }

      if (inputName.length < 6) {
        setErrorName(true);
        throw new Exception('Your name must be complete.');
      }

      if (inputEmail.length < 6) {
        setErrorEmail(true);
        throw new Exception('Your email must be complete.');
      }

      await apiBase
        .post(`/api/auth/signup`, {
          name: inputName,
          email: inputEmail,
          username: inputUserName,
          password: inputPassword,
          address: inputAddress,
        })
        .then(response => {
          setLoading(false);
          setToaster(true);
          setMessage(response.data.message);
          setInputName('');
          setInputEmail('');
          setInputUserName('');
          setInputAddress('');
          setInputPassword('');
          setInputPasswordRepeated('');
          return response.status;
        })
        .catch(err => {
          setToaster(true);
          setMessage(handleError(err));
          setLoading(false);
        });
    } catch {
      setLoading(false);
      if (inputEmail.length < 6) {
        setErrorEmail(true);
      }
      if (inputUserName.length < 4) {
        setErrorUsername(true);
      }
      if (inputName.length < 6) {
        setErrorName(true);
      }
    }
  };
  return (
    <Container>
      <h1>Create your account</h1>
      <Form onSubmit={handleLoginCreate}>
        <Input
          error={errorName}
          placeholder="Complete Name*"
          value={inputName}
          onChange={handleNameChange}
        />
        <EmailInput
          error={errorEmail}
          placeholder="E-mail*"
          value={inputEmail}
          onChange={handleEmailChange}
        />
        <Input
          placeholder="Address"
          value={inputAddress}
          empty={inputAddress.length === 0}
          onChange={handleAddressChange}
        />
        <Input
          error={errorUsername}
          placeholder="Username*"
          value={inputUserName}
          onChange={handleUsernameChange}
        />
        <PasswordInput
          error={errorPassword}
          placeholder="Password*"
          value={inputPassword}
          onChange={handlePasswordChange}
        />
        <PasswordInput
          error={errorPassword}
          placeholder="Confirm Password*"
          value={inputPasswordRepeated}
          onChange={handlePasswordRepeatedChange}
        />
        <RotateButton disabled={loading}>
          {loading ? <FaSpinner color="#FFF" size={14} /> : 'Create'}
        </RotateButton>
        <Link to="/" exact>
          <RotateButton disabled={loading}>
            {loading ? <FaSpinner color="#FFF" size={14} /> : 'Cancel'}
          </RotateButton>
        </Link>
        <StyledNotification>{toaster ? `${message}` : ''}</StyledNotification>
      </Form>
    </Container>
  );
};

export default CreateLogin;
