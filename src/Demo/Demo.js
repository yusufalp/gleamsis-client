import React from 'react';

class Demo extends React.Component {
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
        <main>
          <form action="">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required />
            <label for="password">Password</label>
            <input type="text" name="password" id="password" required />
            <label for="role">Role</label>
            <select name="role" id="role" required>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="student">Student</option>
            </select>
            <button type="submit">Log in</button>
          </form>
        </main>
      </div>
    )
  }
}

export default Demo;