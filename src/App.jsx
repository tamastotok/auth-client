import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Signup from './views/Signup';

import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  const getNameFromServer = (str) => {
    setName(str);
  };

  const getUserId = (id) => {
    setUserId(id);
  };

  const getUserData = (data) => {
    sessionStorage.setItem('id', data._id);
    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('bio', data.bio || '');
    sessionStorage.setItem('phone', data.phone || '');
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('password', '******');
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login getNameFromServer={getNameFromServer} getUserId={getUserId} />
        </Route>

        <Route path="/signup" component={Signup} />

        <Route path="/home">
          <Home userId={userId} getUserData={getUserData} name={name} />
        </Route>

        <Route path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
