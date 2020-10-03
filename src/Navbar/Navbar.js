import React from 'react';

import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p className="logo">G</p>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;