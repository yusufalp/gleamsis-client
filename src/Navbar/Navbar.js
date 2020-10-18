import React from 'react';
import './Navbar.css'
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
        <Link to="/"><p className="logo">G<span className="logo-part">leamSIS</span></p></Link>
        <button
          className="menu-toggler"
          onClick={this.handleMenu}
        ><i className="fas fa-chevron-circle-down"></i>
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