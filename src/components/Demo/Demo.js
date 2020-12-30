import React from 'react';
import './Demo.css';
import TokenService from '../../services/token-service';

class Demo extends React.Component {
  state = {
    username: '',
    password: '',
    error: ''
  }
  handleUsernameChange = (value) => {
    this.setState({
      username: value.trim()
    })
  }
  handlePasswordChange = (value) => {
    this.setState({
      password: value.trim()
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;

    // Currently there is one user, and if that username is not entered,
    // they won't be logged in
    if (username.toLowerCase() !== 'admin') {
      this.setState({
        error: 'Username does not exist'
      })
      return;
    }

    // Checks if the required values are entered
    if (!username.toLowerCase() || !password) {
      this.setState({
        error: 'Username and password are required'
      })
      return;
    }

    // To demo the product, this is the only account to log in
    if (username.toLowerCase() !== 'admin' || password !== 'password') {
      this.setState({
        error: 'Username and password does not match'
      })
      return;
    }

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username, password)
    )

    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <header>
          <h2>Demo GleamSIS</h2>
          <p>
            See it for yourself, how the best student information system currently available will
            help you with your daily tasks and save you valuable time.
          </p>
        </header>
        <section className='demo-login'>
          <p>For demo users, enter 'admin' and 'password'</p>
        </section>
        <main>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'></label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={e => this.handleUsernameChange(e.target.value)}
              placeholder='Username'
              required />
            <label htmlFor='password'></label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={e => this.handlePasswordChange(e.target.value)}
              placeholder='Password'
              required />
            <button type='submit'>Log in</button>
            <p className={`${this.state.error ? 'error' : ''}`}>{this.state.error}</p>
            <p className='required'>* = required fields</p>
          </form>
        </main>
      </div>
    )
  }
}

export default Demo;