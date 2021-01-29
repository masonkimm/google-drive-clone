import logo from './logo.svg';
import './App.css';

import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import Profile from './Authentication/Profile';
import PrivateRoute from './Authentication/PrivateRoute';
import ForgotPassword from './Authentication/ForgotPassword';
import UpdateProfile from './Authentication/UpdateProfile';
// import CenteredContainer from './Authentication/CenteredContainer';

function App() {
  return (
    <>
      <>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>

        <img src={logo} className="App-logo" alt="logo" />
      </>
    </>
  );
}

export default App;
