import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ENDPOINT } from '../server';
import Cookies from 'js-cookie';

export default function Navbar({ userId, getUserData }) {
  const history = useHistory();

  const handleViewProfile = () => {
    axios
      .get(`${ENDPOINT}/user/get/${userId}`, {
        headers: {
          'auth-token': Cookies.get('token'),
        },
      })
      .then((res) => {
        console.log(res);
        getUserData(res.data);
        history.push(`/profile/id=${userId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleViewProfile}>View profile</button>

      <button>Logout</button>
    </div>
  );
}
