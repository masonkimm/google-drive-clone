import logo from './logo.svg';
import './App.css';

// import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './authentication/Signup';
import Login from './authentication/Login';
import Profile from './authentication/Profile';
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';
import Dashboard from './google-drive/Dashboard';
// import CenteredContainer from './Authentication/CenteredContainer';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            {/* google drive routes */}
            <PrivateRoute exact path="/" component={Dashboard} />

            {/* profile routes */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            {/* Auth routes */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>

      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;
