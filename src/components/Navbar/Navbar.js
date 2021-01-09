import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';

class Navbar extends React.Component {
  state = {
    menuVisible: true
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  };

  handleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  };

  renderLogoutLink() {
    return (
      <div className={`navbar-links ${this.state.menuVisible ? 'open-menu' : ''}`}>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div
        className={`navbar-links ${this.state.menuVisible ? 'open-menu' : ''}`}>
        <Link to='/'>Home</Link>
        <NavLink to='/demo'>Demo</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    );
  }
  render() {
    return (
      <nav>
        <Link to='/dashboard'><p className='logo'>G<span className='logo-part'>leamSIS</span></p></Link>
        <button
          className='menu-toggler'
          onClick={this.handleMenu}
        ><i className='fas fa-chevron-circle-down'></i>
        </button>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Navbar;