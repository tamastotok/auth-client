import { useHistory } from 'react-router-dom';
import { logout } from '../services/HTTP/logout';
import { getProfile } from '../services/HTTP/profile';
import Button from 'react-bootstrap/Button';

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
      <div>
        <Button className="mx-2" variant="primary" onclick={handleViewProfile}>
          Profile
        </Button>
        <Button
          className="mx-2"
          variant="outline-primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
