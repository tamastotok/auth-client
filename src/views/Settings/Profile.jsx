import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getProfile, updateProfile } from '../../services/HTTP/profile';

export default function Profile() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const _id = sessionStorage.getItem('_id');

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      getProfile(id).then((res) => {
        setName(sessionStorage.getItem('name'));
        setEmail(sessionStorage.getItem('email'));
        setBio(sessionStorage.getItem('bio'));
        setPhone(sessionStorage.getItem('phone'));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const handleEditProfile = () => {
    updateProfile(_id, name, email, bio, phone);
  };

  return (
    <>
      <Form>
        {/*--- Name ---*/}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="mb-1 fw-bold">Name</Form.Label>
          <Form.Control
            type="name"
            autoComplete="off"
            value={name ? name : ''}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        {/*--- Bio ---*/}
        <Form.Group className="mb-3" controlId="formBasicBio">
          <Form.Label className="mb-1 fw-bold">Bio</Form.Label>
          <Form.Control
            type="bio"
            autoComplete="off"
            value={bio ? bio : ''}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group>

        {/*--- Phone ---*/}
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className="mb-1 fw-bold">Phone</Form.Label>
          <Form.Control
            type="number"
            autoComplete="off"
            value={phone ? phone : ''}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        {/*--- Email ---*/}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-1 fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            autoComplete="off"
            value={email ? email : ''}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="success" onClick={handleEditProfile}>
        Update profile
      </Button>
    </>
  );
}
