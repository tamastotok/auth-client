import axios from 'axios';
import Cookies from 'js-cookie';
import { ENDPOINT } from '../../server';

export const getProfile = async (id) => {
  try {
    const { data } = await axios.get(`${ENDPOINT}/user/get/${id}`, {
      headers: {
        'auth-token': Cookies.get('token'),
        _id: id,
      },
    });

    sessionStorage.setItem('_id', data._id);
    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('password', '******');
    sessionStorage.setItem('bio', data.bio);
    sessionStorage.setItem('phone', data.phone);

    return true;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};

export const updateProfile = async (id, name, email, bio, phone) => {
  try {
    const { data } = await axios.put(
      `${ENDPOINT}/user/edit/${id}`,
      { name, email, bio, phone },
      {
        headers: {
          'auth-token': Cookies.get('token'),
          _id: id,
        },
      }
    );

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('bio', bio);
    sessionStorage.setItem('phone', phone);

    alert(data);
  } catch (error) {
    alert(error.response.data);
  }
};

export const deleteProfile = async (id, password) => {
  try {
    const { data } = await axios.delete(`${ENDPOINT}/user/del/${id}`, {
      headers: {
        'auth-token': Cookies.get('token'),
        _id: id,
        password,
      },
    });

    sessionStorage.clear();
    Cookies.remove('token');
    alert(data);
    return true;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};

export const changePassword = async (
  id,
  oldPassword,
  newPassword,
  confirmNewPassword
) => {
  try {
    const { data } = await axios.put(
      `${ENDPOINT}/user/editpw/${id}`,
      { oldPassword, newPassword, confirmNewPassword },
      {
        headers: {
          'auth-token': Cookies.get('token'),
          _id: id,
        },
      }
    );

    alert(data);
    return true;
  } catch (error) {
    alert(error.response.data);
    return false;
  }
};
