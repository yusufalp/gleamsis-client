import React from 'react';
import { Link } from 'react-router-dom';

class Deleted extends React.Component {
  render() {
    return (
      <div>
        <h2>Deleted Successfully</h2>
        <Link to={'/dashboard'}>Go to dashboard</Link>
      </div>
    )
  }
}

export default Deleted;