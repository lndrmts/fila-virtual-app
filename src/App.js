import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './Dashbboard';
import QrCode from './Dashbboard/Qrcode';
import Perfil from './Dashbboard/Perfil';
import Home from './Home';
import Login from './Login';
import Register from './Register';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cadastro">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/dashboard/qrcode">
            <QrCode />
          </Route>

          <Route path="/dashboard/perfil">
            <Perfil />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
