import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ENDPOINT } from '../server';
import Cookies from 'js-cookie';

function Profile() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);
  const [isAccountDeleteDisabled, setIsAccountDeleteDisabled] = useState(true);

  const editButtonRef = useRef(null);
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const history = useHistory();

  const id = sessionStorage.getItem('id');
  const [name, setName] = useState(sessionStorage.getItem('name') || '');
  const [bio, setBio] = useState(sessionStorage.getItem('bio') || '');
  const [phone, setPhone] = useState(sessionStorage.getItem('phone') || '');
  const [email, setEmail] = useState(sessionStorage.getItem('email') || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('bio', bio);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('email', email);
  }, [name, bio, phone, email]);

  const handleGoBack = () => {
    history.goBack();
  };

  const updateAccount = () => {
    axios
      .put(
        `${ENDPOINT}/user/edit/${id}`,
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          bio: bioRef.current.value,
          phone: phoneRef.current.value,
        },
        {
          headers: {
            'auth-token': Cookies.get('token'),
            _id: id,
          },
        }
      )
      .then((res) => alert(res.data))
      .catch((error) => alert(error.response.data));
  };

  const editUserInfo = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'EDIT') {
      setIsDisabled((state) => !state);
    } else {
      setIsDisabled((state) => !state);
      updateAccount();
    }
  };

  const deleteUser = () => {
    setIsAccountDeleteDisabled(false);
  };

  const confirmDeleteAccount = () => {
    axios
      .delete(`${ENDPOINT}/user/del/${id}`, {
        headers: {
          'auth-token': Cookies.get('token'),
          _id: id,
          password: confirmPasswordRef.current.value,
        },
      })
      .then((res) => {
        alert(res.data);
        history.push('/');
      })
      .catch((error) => alert(error.response.data));
  };

  const changeAccountPassword = () => {
    axios
      .put(
        `${ENDPOINT}/user/editpw/${id}`,
        {
          password: passwordRef.current.value,
          newPassword: newPasswordRef.current.value,
        },
        {
          headers: {
            'auth-token': Cookies.get('token'),
            _id: id,
          },
        }
      )
      .then((res) => alert(res.data))

      .catch((error) => alert(error.response.data));
  };

  const changePassword = (e) => {
    setPassword('');
    if (e.target.innerText === 'CHANGE PASSWORD') {
      setIsPasswordDisabled((state) => !state);
    } else {
      setIsPasswordDisabled((state) => !state);
      changeAccountPassword();
    }
  };

  return (
    <div>
      <div className="navbar">
        <img src="" alt="profile-pic" />
        <p>{name}</p>
        <button onClick={handleGoBack}>back</button>
      </div>

      <div className="title">
        <h1>Personal info</h1>
        <p>Basic info, like your name and photo</p>
      </div>

      <div className="profile-container">
        <div className="profile-text-container">
          <div className="text">
            <h3>Account info</h3>
            <small>Some info may be visible to other people</small>
          </div>
          <button
            className="edit-button"
            onClick={editUserInfo}
            ref={editButtonRef}
          >
            {isDisabled ? 'Edit' : 'Save'}
          </button>
          <button className="pw-button" onClick={changePassword}>
            {isPasswordDisabled ? 'Change password' : 'Confirm'}
          </button>
          <button className="delete-button" onClick={deleteUser}>
            Delete account
          </button>
        </div>

        <div className="table">
          <div className="row">
            <p>Photo</p>
            <img src="" alt="profile" />
          </div>

          <div className="row">
            <p className="cell">Name</p>

            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              disabled={isDisabled}
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="row">
            <p>Bio</p>
            <input
              type="text"
              name="bio"
              autoComplete="off"
              value={bio}
              disabled={isDisabled}
              ref={bioRef}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="row">
            <p>Phone</p>
            <input
              type="number"
              name="phone"
              autoComplete="off"
              value={phone}
              disabled={isDisabled}
              ref={phoneRef}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="row">
            <p>Email</p>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              disabled={isDisabled}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="row">
            <p>{isPasswordDisabled ? 'Password' : 'Old password'}</p>
            <input
              type="password"
              name="password"
              value={isPasswordDisabled ? '******' : password}
              disabled={isPasswordDisabled}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!isPasswordDisabled ? (
            <div className="row">
              <p>New password</p>
              <input
                type="password"
                name="new-password"
                disabled={isPasswordDisabled}
                ref={newPasswordRef}
              />
            </div>
          ) : null}

          {!isAccountDeleteDisabled ? (
            <div className="row">
              <p>Enter password</p>
              <input
                type="password"
                name="confirm-password"
                ref={confirmPasswordRef}
              />
              <button onClick={confirmDeleteAccount}>Delete</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Profile;
