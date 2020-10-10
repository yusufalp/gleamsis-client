import React from 'react';

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
    let username = this.state.username
    let password = this.state.password

    if (username.toLowerCase() !== 'admin'){
      this.setState({
        error: "Username does not exists"
      })
      return
    }

      if (!username.toLowerCase() || !password) {
        this.setState({
          error: "Username and password are required"
        })
        return
      }

    if (username.toLowerCase() !== "admin" || password !== "password") {
      this.setState({
        error: "Username and password does not match"
      })
      return
    }

    this.props.history.push("/dashboard")
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
        <section>
          <p>For demo users:</p>
          <p>Username: admin</p>
          <p>Password: password</p>
        </section>
        <main>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username*</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={e => this.handleUsernameChange(e.target.value)}
              required />
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => this.handlePasswordChange(e.target.value)}
              required />
            <button type="submit">Log in</button>
            <p className="error">{this.state.error}</p>
            <p className="required">* = required fields</p>
          </form>
        </main>
      </div>
    )
  }
}

export default Demo;