import React from 'react';
import { Link } from 'react-router-dom';

const Success = (props) => {
  return (
    <div>
      <header>
        <h2>{window.location.pathname === '/success' ? 'Added' : 'Deleted'} Successfully</h2>
        <Link to={'/dashboard'}>Go to dashboard</Link>
      </header>
    </div>
  );
}

export default Success;