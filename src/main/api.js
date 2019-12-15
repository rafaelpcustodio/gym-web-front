// eslint-disable-next-line import/no-extraneous-dependencies
import { Exception } from 'handlebars';
import apiBase from '../services/api';

import history from '../_config/history';

const loginAPI = async token => {
  try {
    const response = await apiBase.post(`/api/auth/signin`, {});
    if (response.status === 200) {
    } else {
      throw Exception('Error during login request.');
    }
  } catch {}
};

export { loginAPI };
