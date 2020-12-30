import React from 'react';
import { Link } from 'react-router-dom';

class Success extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>Added Successfully</h2>
          <Link to={'/dashboard'}>Go to dashboard</Link>
        </header>
      </div>
    )
  }
}

export default Success;