import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContainer from '../containers/AppContainer';
import Home from '../components/Home';
import Foo from '../components/Foo';
import Bar from '../components/Bar';

const Routes = ({location}) => {
  return (
    <AppContainer>
      <Switch>
        <Route exact location={location} path='/' component={Home}/>
        <Route exact location={location} path='/home' component={Home}/>
        <Route exact location={location} path='/foo' component={Foo}/>
        <Route exact location={location} path='/bar' component={Bar}/>
      </Switch>
    </AppContainer>
  );
};

Routes.propTypes = {
  location: PropTypes.object
};

export default Routes;
