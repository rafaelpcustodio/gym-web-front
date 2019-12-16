// eslint-disable-next-line import/no-extraneous-dependencies
import { Exception } from 'handlebars';
import moment from 'moment';
import apiBase from '../services/api';

const api = async (token, userId) => {
  // alterar aqui para dateNow
  const dateNow = moment().format('2019-12-15');
  try {
    let response = [];
    if (dateNow) {
      response = await apiBase.get(`/users/${userId}/exercises`, {
        params: {
          date: dateNow,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      response = await apiBase.get(`/users/${userId}/exercises`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    console.log(response);
    if (response.status === 200 && response.data !== undefined) {
      console.log(response.data);
      return response.data;
    }
    throw Exception('Error during login request.');
  } catch {
    console.log('error');
  }
  return [];
};

export default api;
