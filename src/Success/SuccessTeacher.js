import React from 'react';
import { Link } from 'react-router-dom';

class SuccessTeacher extends React.Component {
  render() {
    return (
      <div>
        <h2>Teacher Added Successfully</h2>
        <Link to={'/dashboard'}>Go to dashboard</Link>
      </div>
    )
  }
}

export default SuccessTeacher;