import { useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';
import Settings from './views/Settings/Settings';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

function App() {
  const location = useLocation();

  useEffect(() => {
    //  Alert message if token is not found
    const tokenPromise = new Promise((resolve) => {
      if (location.hash && !Cookies.get('token')) {
        resolve('Invalid token!');
        return false;
      } else {
        return true;
      }
    });

    tokenPromise.then((res) => {
      if (!false) alert(res);
    });
  }, [location.hash]);

  const checkToken = () => {
    //  Redirect if token is not found
    if (location.pathname !== '/' && !Cookies.get('token')) {
      return <Redirect from="/profile/:id" to="/" />;
    }

    //  Redirect if token is found
    if (location.pathname === '/' && Cookies.get('token')) {
      const token = Cookies.get('token');
      const decoded = jwt_decode(token);
      return <Redirect from="/" to={`/profile/id#${decoded._id}`} />;
    }
  };

  return (
    <Switch>
      {checkToken()}
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/profile/:id" component={Settings} />
    </Switch>
  );
}

export default App;
