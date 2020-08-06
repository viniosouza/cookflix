/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoRegistration from './pages/Register/Video';
import CategoryRegistration from './pages/Register/Category';

const Pagina404 = () => <div>Pagina 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={VideoRegistration} />
      <Route path="/cadastro/categoria" component={CategoryRegistration} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
