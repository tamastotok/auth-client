import { useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { login } from '../services/HTTP/login';
//import Social from '../components/Social/Social';
import lock_black_24dp from '../assets/lock_black_24dp.svg';
import visibility_black_24dp from '../assets/visibility_black_24dp.svg';
import visibility_off_black_24dp from '../assets/visibility_off_black_24dp.svg';
import mail_black_24dp from '../assets/mail_black_24dp.svg';

export default function Login() {
  const history = useHistory();
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

  const handleLogin = () => {
    if (emailRef.current && passwordRef.current) {
      login(emailRef.current.value, passwordRef.current.value).then((res) => {
        if (res) history.push('/home');
      });
    }
  };

  return (
    <>
      <div className="auth-container">
        <h3>Join thousands of learners from around the world</h3>
        <p>
          Master web development by making real-life projects. There are
          multiple paths for your to choose.
        </p>

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
        {/*------*/}

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
        {/*------*/}

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {/*
        <small>or continue with these social profile</small>

        <Social />
        */}
        <small>
          Not a member yet?
          <Link to="/signup">
            <button className="small-button">Register</button>
          </Link>
        </small>
      </div>
    </>
  );
}
