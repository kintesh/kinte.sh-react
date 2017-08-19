import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom'

import App from '../containers/App';

import Home from '../components/Home';
import Foo from '../components/Foo';
import Bar from '../components/Bar';

const Routes = () =>
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/foo' component={Foo} />
      <Route path='/bar' component={Bar} />
    </Switch>
  </App>
;


export default Routes;
