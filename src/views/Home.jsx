import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ENDPOINT } from '../server';
import Cookies from 'js-cookie';

export default function Home({ name, userId, getUserData }) {
  const history = useHistory();

  const handleViewProfile = async () => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/user/get/${userId}`, {
        headers: {
          'auth-token': Cookies.get('token'),
        },
      });

      getUserData(data);
      history.push(`/profile/id=${userId}`);
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleLogout = async () => {
    try {
      const { userIsLoggedIn } = await axios.get(
        `${ENDPOINT}/auth/logout/${userId}`,
        {
          headers: {
            'auth-token': Cookies.get('token'),
            _id: userId,
          },
        }
      );

      if (!userIsLoggedIn) {
        Cookies.remove('token');
        history.push('/');
      }
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <div className="home-container">
      <h1>Welcome {name}!</h1>
      <div className="nav-btn-group">
        <button className="profile-btn" onClick={handleViewProfile}>
          View profile
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
