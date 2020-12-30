import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Testimonials from './Testimonials';

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
        <main>
          <section className='group'>
            <div className='item'>
              <h2>All you need is in one place</h2>
              <p>
                You can use information for your teachers, students and courses
                in one place. Every school generate thousands of data every single day.
                Keeping track of the data, accessing it and using it every day is made simple with
                GleamSIS.
            </p>
            </div>
            <div className='item'>
              <img className='home-pic' src='images/gleam3.png' alt=''></img>
            </div>
          </section>
          <section className='group2'>
            <div className='item'>
              <h2>Access your data with ease</h2>
              <p>
                With visual data display, you can use your time better. Filter and sort
                through what you need, have GleamSIS generate an awesome looking graph, share it
                with others and let the knowledge flow.
            </p>
            </div>
            <div className='item'>
              <img className='home-pic' src='images/gleam2.png' alt=''></img>
            </div>
          </section>
          <section className='group'>
            <div className='item'>
              <h2>Provide your staff great experience</h2>
              <p>
                Improve your staff's performance and let them manage their time effectively. You can
                see their usage time, offer help and support, or suggest curated tips and tricks that will
                improve their performance.
            </p>
            </div>
            <div className='item'>
              <img className='home-pic' src='images/gleam4.png' alt=''></img>
            </div>
          </section>
          <img className='banner' src='images/banner3.png' alt=''></img>
          <section>
            <h2 className='section-title'>Want to learn more</h2>
            <Link to='/contact' className='btn-add'>Contact Us</Link>
          </section>
          <section className='testimonials'>
            <h2 className='section-title'>Testimonials</h2>
            <Testimonials />
          </section>
        </main>
      </div>
    )
  }
}

export default Home;