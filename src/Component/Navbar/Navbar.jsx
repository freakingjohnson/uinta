// @flow strict
import * as React from 'react';
const banner = require('./banner.svg')

const Navbar = (): React.Element<'div'> => (
  <div>
    <div className="banner-div">
      <img src={banner} alt="uinta appliance svc" className="banner"/>
    <ul className="nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/schedule">Schedule</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
    </div>
  </div>
);

export default Navbar;