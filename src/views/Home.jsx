import { useHistory } from 'react-router-dom';
import { logout } from '../services/HTTP/logout';
import { getProfile } from '../services/HTTP/profile';

export default function Home() {
  const history = useHistory();
  const _id = sessionStorage.getItem('_id');
  const name = sessionStorage.getItem('name');

  const handleViewProfile = async () => {
    getProfile(_id).then((res) => {
      if (res) history.push(`/profile/id#${_id}`);
    });
  };

  const handleLogout = () => {
    logout(_id).then((res) => {
      if (res) history.push('/');
    });
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
