import React from 'react';

import Nav from '../components/Nav';

const App = (props) =>
  <div>
    <Nav />
    {props.children}
  </div>
;

export default App;
