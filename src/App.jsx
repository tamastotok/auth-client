import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';
import Settings from './views/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/profile/:id" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
