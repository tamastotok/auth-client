import axios from 'axios';
import Cookies from 'js-cookie';
import { ENDPOINT } from '../../server';

export const logout = async (id) => {
  try {
    const { userIsLoggedIn } = await axios.get(
      `${ENDPOINT}/auth/logout/${id}`,
      {
        headers: {
          'auth-token': Cookies.get('token'),
          _id: id,
        },
      }
    );

    if (!userIsLoggedIn) {
      sessionStorage.clear();
      Cookies.remove('token');
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
