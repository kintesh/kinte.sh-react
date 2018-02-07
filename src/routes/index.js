import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';

import AppContainer from '../containers/AppContainer';
// import Home from '../components/Home';
// import Foo from '../components/Foo';
// import Bar from '../components/Bar';

const asyncRoute = (getComponent) => {
  return class AsyncComponent extends React.Component {
    state = {
      Component: null
    };

    componentDidMount() {
      if (this.state.Component === null) {
        getComponent().then((Component) => {
          this.setState({Component: Component});
        });
      }
    }

    render() {
      const {Component} = this.state;
      if (Component && Component.default) {
        return <Component.default {...this.props} />;
      } else {
        return <div>loading...</div>;
      }
    }
  };
};

const Home = asyncRoute(() => import('../components/Home'));
const Foo = asyncRoute(() => import('../components/Foo'));
const Bar = asyncRoute(() => import('../components/Bar'));

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
