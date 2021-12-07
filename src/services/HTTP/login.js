import axios from 'axios';
import Cookies from 'js-cookie';
import { ENDPOINT } from '../../server';

export const login = async (email, password) => {
  try {
    const { data, headers } = await axios.post(`${ENDPOINT}/auth/login`, {
      email,
      password,
    });

    sessionStorage.setItem('_id', data._id);
    sessionStorage.setItem('name', data.name);

    Cookies.set('token', headers['auth-token']);
    return true;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};
