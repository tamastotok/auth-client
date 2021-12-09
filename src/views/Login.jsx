import { useState, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
//import Social from '../components/Social/Social';
import { login } from '../services/HTTP/login';
import lock_black_24dp from '../assets/lock_black_24dp.svg';
import visibility_black_24dp from '../assets/visibility_black_24dp.svg';
import visibility_off_black_24dp from '../assets/visibility_off_black_24dp.svg';
import mail_black_24dp from '../assets/mail_black_24dp.svg';

export default function Login() {
  const history = useHistory();
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

  const handleLogin = (e) => {
    e.preventDefault();

    login(emailRef.current.value, passwordRef.current.value).then((res) => {
      if (res) history.push('/home');
    });
  };

  return (
    <div className="auth-container">
      <h3>Join thousands of learners from around the world</h3>
      <p>
        Master web development by making real-life projects. There are multiple
        paths for your to choose.
      </p>

      <Form>
        {/*--- Email ---*/}
        <Form.Group className="mb-3 w-100 d-flex" controlId="formBasicEmail">
          <img src={mail_black_24dp} alt="mail-icon" />
          <Form.Control
            className="ms-2"
            type="email"
            placeholder="Enter email"
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
          onClick={handleLogin}
        >
          Login
        </Button>
      </Form>

      <div>
        <small>Not a member yet?</small>
        <Link to="/signup">
          <Button variant="link" size="sm">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
