import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>
  <nav>
    <Link to="/">Home</Link>
    &nbsp;|&nbsp;
    <Link to="/foo">Foo</Link>
    &nbsp;|&nbsp;
    <Link to="/bar">Boo</Link>
  </nav>
;

export default Nav;
