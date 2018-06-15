import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import Register from './components/register';
import youLoggedInBruv from './components/youLoggedInBruv';

import './main.css';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login/:userName" component={Login} />
      <Route exact path="/register/:userName" component={Register} />
      <Route exact path="/youLoggedInBruv" component={youLoggedInBruv} />
    </Switch>
  </BrowserRouter>
);

render(<Main />, document.getElementById('app'));
