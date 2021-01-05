import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './../Pages/Login/login';
import Home from './../Pages/Home/index';

class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default Router;