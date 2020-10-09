import React from 'react';

import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    menuVisible: true
  }
  handleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }
  render() {
    return (
      <nav>
        <Link to="/"><p className="logo">G</p></Link>
        <button
          className="menu-toggler"
          onClick={this.handleMenu}
        >X
        </button>
        <div
          className={`navbar-links ${this.state.menuVisible ? "open-menu":""}`}>
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

//
export default Navbar;