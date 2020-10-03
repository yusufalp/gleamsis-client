import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>GleamSIS</h1>
          <p>
            Welcome to GleamSIS. Your one stop student information system.
          </p>
        </header>
        <main className="group">
          <section className="item">
            <h2>All you need is in one place</h2>
            <p>
              You can search for your teachers, students and courses
              in one place.
            </p>
          </section>
          <section className="item">
            <h2>Access your data with ease</h2>
            <p>
              With visual data display, you can easily see your Gleam usage.
            </p>
          </section>
          <section className="item">
            <h2>Provide your staff great experience</h2>
            <p>
              Improve your staff's performance and let them manage their time effectively
            </p>
          </section>
        </main>
      </div>
    )
  }
}

export default Home;