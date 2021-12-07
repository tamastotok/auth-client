import { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  getProfile,
  changePassword,
  deleteProfile,
  updateProfile,
} from '../services/HTTP/profile';

function Profile() {
  const history = useHistory();
  const location = useLocation();

  const [updateIsDisabled, setUpdateIsDisabled] = useState(true);
  const [passwordIsDisabled, setPasswordIsDisabled] = useState(true);
  const [deleteIsDisabled, setDeleteIsDisabled] = useState(true);

  const [name, setName] = useState(sessionStorage.getItem('name'));
  const [bio, setBio] = useState(sessionStorage.getItem('bio'));
  const [phone, setPhone] = useState(sessionStorage.getItem('phone'));
  const [email, setEmail] = useState(sessionStorage.getItem('email'));
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const _id = sessionStorage.getItem('_id');

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      getProfile(id).then(() => {
        setIsLoaded(true);
      });
    }
  }, [location.hash]);

  useEffect(() => {
    if (isLoaded) {
      setName(sessionStorage.getItem('name'));
      setBio(sessionStorage.getItem('bio'));
      setPhone(sessionStorage.getItem('phone'));
      setEmail(sessionStorage.getItem('email'));
    }
  }, [isLoaded]);

  useEffect(() => {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('bio', bio);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('email', email);
  }, [name, bio, phone, email]);

  const handleGoBack = () => {
    history.push('/home');
  };

  const handleEditProfile = (e) => {
    if (e.target.innerText === 'EDIT') {
      setUpdateIsDisabled((state) => !state);
    } else {
      setUpdateIsDisabled((state) => !state);
      updateProfile(_id, name, email, bio, phone);
    }
  };

  const handleDeleteProfile = () => {
    setDeleteIsDisabled(false);
  };

  const handleConfirmDeleteProfile = () => {
    deleteProfile(_id, confirmPasswordRef.current.value).then((res) => {
      if (res) history.push('/');
    });
  };

  const handleChangePassword = (e) => {
    setPassword('');
    if (e.target.innerText === 'CHANGE PASSWORD') {
      setPasswordIsDisabled((state) => !state);
    } else {
      setPasswordIsDisabled((state) => !state);
      changePassword(
        _id,
        passwordRef.current.value,
        newPasswordRef.current.value
      );
    }
  };

  const handleCloseButton = () => {
    setDeleteIsDisabled(true);
  };

  return (
    <div>
      <div className="navbar">
        <img src="" alt="avatar" />
        <p>{name}</p>
        <button className="back-btn" onClick={handleGoBack}>
          back
        </button>
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
          <button className="edit-button" onClick={handleEditProfile}>
            {updateIsDisabled ? 'Edit' : 'Save'}
          </button>
          <button className="pw-button" onClick={handleChangePassword}>
            {passwordIsDisabled ? 'Change password' : 'Confirm'}
          </button>
          <button className="delete-button" onClick={handleDeleteProfile}>
            Delete account
          </button>
        </div>

        <div className="table">
          <div className="row">
            <p>Photo</p>
            <img src="" alt="avatar" />
          </div>

          {/*--- Name ---*/}
          <div className="row">
            <p className="cell">Name</p>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name || ''}
              disabled={updateIsDisabled}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/*--- Bio ---*/}
          <div className="row">
            <p>Bio</p>
            <input
              type="text"
              name="bio"
              autoComplete="off"
              value={bio || ''}
              disabled={updateIsDisabled}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          {/*--- Phone ---*/}
          <div className="row">
            <p>Phone</p>
            <input
              type="number"
              name="phone"
              autoComplete="off"
              value={phone || ''}
              disabled={updateIsDisabled}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/*--- Email ---*/}
          <div className="row">
            <p>Email</p>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email || ''}
              disabled={updateIsDisabled}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/*--- Password ---*/}
          <div className="row">
            <p>{passwordIsDisabled ? 'Password' : 'Old password'}</p>
            <input
              type="password"
              name="password"
              value={passwordIsDisabled ? '******' : password}
              disabled={passwordIsDisabled}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!passwordIsDisabled ? (
            <div className="row">
              <p>New password</p>
              <input
                type="password"
                name="new-password"
                disabled={passwordIsDisabled}
                ref={newPasswordRef}
              />
            </div>
          ) : null}

          {!deleteIsDisabled ? (
            <div className="row">
              <p>Enter password</p>
              <input
                type="password"
                name="confirm-password"
                ref={confirmPasswordRef}
              />
              <button
                className="confirm-btn"
                onClick={handleConfirmDeleteProfile}
              >
                Delete
              </button>
              <button className="close-btn" onClick={handleCloseButton}>
                X
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Profile;
