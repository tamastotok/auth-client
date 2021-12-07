import axios from 'axios';
import { ENDPOINT } from '../../server';

export const signup = async (name, email, password) => {
  try {
    const { data } = await axios.post(`${ENDPOINT}/auth/register`, {
      name,
      email,
      password,
    });

    alert(data);
    return true;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};
