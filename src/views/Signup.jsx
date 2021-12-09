import { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import lock_black_24dp from '../assets/lock_black_24dp.svg';
import visibility_black_24dp from '../assets/visibility_black_24dp.svg';
import visibility_off_black_24dp from '../assets/visibility_off_black_24dp.svg';
import person_black_24dp from '../assets/person_black_24dp.svg';
import mail_black_24dp from '../assets/mail_black_24dp.svg';
import { signup } from '../services/HTTP/signup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Signup() {
  const history = useHistory();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const visibleIconRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const handleTogglePassword = (e) => {
    if (passwordRef.current.type === 'password') {
      setChecked(e.currentTarget.checked);
      passwordRef.current.type = 'text';
      visibleIconRef.current.src = visibility_black_24dp;
    } else {
      setChecked(e.currentTarget.checked);
      passwordRef.current.type = 'password';
      visibleIconRef.current.src = visibility_off_black_24dp;
    }
  };

  const handleReg = async (e) => {
    e.preventDefault();

    signup(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    ).then((res) => {
      if (res) history.push('/');
    });
  };

  return (
    <div className="reg-container">
      <Form>
        {/*--- Name ---*/}
        <Form.Group className="mb-3 w-100 d-flex" controlId="formBasicName">
          <img src={person_black_24dp} alt="name-icon" />
          <Form.Control
            className="ms-2"
            type="name"
            placeholder="Enter name"
            required
            ref={nameRef}
          />
        </Form.Group>

        {/*--- Email ---*/}
        <Form.Group className="mb-3 w-100 d-flex" controlId="formBasicEmail">
          <img src={mail_black_24dp} alt="mail-icon" />
          <Form.Control
            className="ms-2"
            type="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
        </Form.Group>

        {/*--- Password ---*/}
        <Form.Group className="mb-3 w-100 d-flex" controlId="formBasicPassword">
          <img src={lock_black_24dp} alt="lock-icon" />
          <Form.Control
            className="mx-2"
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="outline-secondary"
            checked={checked}
            value="1"
            onChange={handleTogglePassword}
          >
            <img
              src={visibility_off_black_24dp}
              alt="toggle-password"
              ref={visibleIconRef}
            />
          </ToggleButton>
        </Form.Group>

        {/*--- Login Button ---*/}
        <Button
          className="w-100 mb-2"
          variant="primary"
          type="submit"
          onClick={handleReg}
        >
          Sign up
        </Button>
      </Form>

      <div>
        <small>Already a member?</small>
        <Link to="/">
          <Button variant="link" size="sm">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
