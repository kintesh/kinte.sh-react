import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';

import AppContainer from '../containers/AppContainer';
import Home from '../components/Home';
import Foo from '../components/Foo';
import Bar from '../components/Bar';

const Routes = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/foo" exact component={Foo}/>
        <Route path="/bar" exact component={Bar}/>
        <Redirect from="/*" to="/"/>
      </Switch>
    </AppContainer>
  );
};

export default Routes;
