import { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ENDPOINT } from '../server';
import lock_black_24dp from '../assets/lock_black_24dp.svg';
import visibility_black_24dp from '../assets/visibility_black_24dp.svg';
import visibility_off_black_24dp from '../assets/visibility_off_black_24dp.svg';
import person_black_24dp from '../assets/person_black_24dp.svg';
import mail_black_24dp from '../assets/mail_black_24dp.svg';

export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const visibleIconRef = useRef(null);
  const history = useHistory();
  const [statusMessage, setStatusMessage] = useState('');

  const handleShowPassword = () => {
    if (passwordRef.current && visibleIconRef.current) {
      if (passwordRef.current.type === 'password') {
        passwordRef.current.type = 'text';
        visibleIconRef.current.src = visibility_black_24dp;
      } else {
        passwordRef.current.type = 'password';
        visibleIconRef.current.src = visibility_off_black_24dp;
      }
    }
  };

  const handleReg = () => {
    if (nameRef.current && emailRef.current && passwordRef.current) {
      axios
        .post(`${ENDPOINT}/auth/register`, {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          alert(res.data);
          history.push('/');
        })
        .catch((error) => {
          console.error(error.response.data);
          setStatusMessage(error.response.data);
        });
    }
  };

  return (
    <div className="reg-container">
      {/*--- Status message ---*/}

      <div className="status-message">{statusMessage}</div>

      {/*--- Name ---*/}
      <div className="input-container">
        <img src={person_black_24dp} alt="mail-icon" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          ref={nameRef}
        />
      </div>

      {/*--- Email ---*/}
      <div className="input-container">
        <img src={mail_black_24dp} alt="mail-icon" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          ref={emailRef}
        />
      </div>

      {/*--- Password ---*/}
      <div className="input-container">
        <img src={lock_black_24dp} alt="lock-icon" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <button className="toggle-password" onClick={handleShowPassword}>
          <img
            src={visibility_off_black_24dp}
            alt="toggle-password"
            ref={visibleIconRef}
          />
        </button>
      </div>

      <button className="reg-button" onClick={handleReg}>
        Sign up
      </button>
      <small>
        Already a member?
        <Link to="/">
          <button className="small-button">Login</button>
        </Link>
      </small>
    </div>
  );
}
