// eslint-disable-next-line import/no-extraneous-dependencies
import { Exception } from 'handlebars';
import apiBase from '../services/api';

import history from '../_config/history';

const loginAPI = async (
  inputUsername,
  inputPassword,
  setError,
  setLoading,
  setMessage,
  setToaster
) => {
  setError(false);
  if (inputPassword.length === 0 || inputUsername.length === 0) {
    setError(true);
    return;
  }
  try {
    setLoading(true);
    const response = await apiBase.post(`/auth/signin`, {
      usernameOrEmail: inputUsername,
      password: inputPassword,
    });
    if (response.status === 200) {
      setToaster(false);
      setError(false);
      setLoading(false);
      localStorage.setItem('token', response.data.accessToken);
      history.history.push('/main');
    } else {
      throw Exception('Error during login request.');
    }
  } catch {
    setToaster(true);
    setMessage('User might not exist. Use a valid login');
    setLoading(false);
    setError(true);
  }
};

export { loginAPI };
