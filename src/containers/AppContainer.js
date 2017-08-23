import React from 'react';
import PropTypes from 'prop-types';

import App from '../components/App';

const AppContainer = (props) => {
  return (
    <App {...props}/>
  );
};

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppContainer;
