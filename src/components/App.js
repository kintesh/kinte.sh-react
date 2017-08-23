import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

const App = ({children}) => {
  return (
    <div>
      <Nav />
      <hr/>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
