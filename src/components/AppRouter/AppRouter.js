// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './AppRouter.css';

import Search from '../Search';
import ShowPage from '../ShowPage';

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
