import { useState } from 'react';
import { useHistory } from 'react-router';
import { deleteProfile } from '../../services/HTTP/profile';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Account() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const _id = sessionStorage.getItem('_id');

  const handleConfirmDeleteProfile = () => {
    deleteProfile(_id, password).then((res) => {
      if (res) history.push('/');
    });
  };

  return (
    <>
      <Form className="mb-2">
        {/*--- Password ---*/}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="mb-1 fw-bold">
            Confirm with password
          </Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Button variant="danger" onClick={handleConfirmDeleteProfile}>
        Delete account
      </Button>
    </>
  );
}
