import { useState } from 'react';
import { changePassword } from '../../services/HTTP/profile';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Security() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const _id = sessionStorage.getItem('_id');

  const handleChangePassword = () => {
    changePassword(_id, oldPassword, newPassword, confirmNewPassword).then(
      (res) => {
        //  Reset password inputs
        if (res) {
          setOldPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
        }
      }
    );
  };

  return (
    <>
      <Form>
        {/*--- Old Password ---*/}
        <Form.Group className="mb-3" controlId="oldPassword">
          <Form.Label className="mb-1 fw-bold">Old password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Form.Group>

        {/*--- New Password ---*/}
        <Form.Group className="mb-3" controlId="newPassword">
          <Form.Label className="mb-1 fw-bold">New password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        {/*--- Confirm New Password ---*/}
        <Form.Group className="mb-3" controlId="confNewPassword">
          <Form.Label className="mb-1 fw-bold">Confirm new password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="outline-danger" onClick={handleChangePassword}>
        Change password
      </Button>
    </>
  );
}
