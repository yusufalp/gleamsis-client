import React from 'react';
import {Link} from 'react-router-dom';

class Pricing extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>Pricing</h2>
          <p>
            We have a solution for every budget
          </p>
        </header>
        <main>
          <div className='group4'>
            <section className='item-pricing'>
              <h3>Individual Schools</h3>
              <p>
                Small size schools
              </p>
              <ul>
                <li>Up to 1000 users</li>
                <li>Up to 10 admin users</li>
                <li>24/7 phone support</li>
                <li>One-Time set up fee</li>
              </ul>
              <Link to='/demo' className='btn-add'>Demo GleamSIS</Link>
            </section>
            <section className='item-pricing'>
              <h3>Districts</h3>
              <p>
                Larger or multiple schools
              </p>
              <ul>
                <li>Up to 5000 users</li>
                <li>Up to 100 admin users</li>
                <li>24/7 phone and online chat support</li>
                <li>No set up fee</li>
              </ul>
              <Link to='/contact' className='btn-add'>Request a qoute</Link>
            </section>
            <section className='item-pricing'>
              <h3>Enterprise</h3>
              <p>
                Contact us for a personalized offer
              </p>
              <Link to='/contact' className='btn-add'>Contact</Link>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Pricing;