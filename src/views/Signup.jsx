import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import lock_black_24dp from '../assets/lock_black_24dp.svg';
import visibility_black_24dp from '../assets/visibility_black_24dp.svg';
import visibility_off_black_24dp from '../assets/visibility_off_black_24dp.svg';
import person_black_24dp from '../assets/person_black_24dp.svg';
import mail_black_24dp from '../assets/mail_black_24dp.svg';
import { signup } from '../services/HTTP/signup';

export default function Signup() {
  const history = useHistory();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const visibleIconRef = useRef(null);

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

  const handleReg = async () => {
    if (nameRef.current && emailRef.current && passwordRef.current) {
      signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      ).then((res) => {
        if (res) history.push('/');
      });
    }
  };

  return (
    <div className="reg-container">
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
