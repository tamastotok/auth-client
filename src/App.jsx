import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import Signup from './views/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/profile/:id" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
