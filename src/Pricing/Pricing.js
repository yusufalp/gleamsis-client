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
          <div className="group4">
            <section className="item-pricing">
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
              <button className='btn-price' type="submit"><Link to='/demo'>Demo GleamSIS</Link></button>
            </section>
            <section className="item-pricing">
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
              <button className='btn-price' type="submit"><Link to='/contact'>Request a qoute</Link></button>
            </section>
            <section className="item-pricing">
              <h3>Enterprise</h3>
              <p>
                Contact us for a personalized offer
              </p>
              <button className='btn-price' type="submit"><Link to='/contact'>Contact</Link></button>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default Pricing;