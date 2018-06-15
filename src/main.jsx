import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import Register from './components/register';
import './main.css';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route path="/login/:username" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

render(<Main />, document.getElementById('app'));
