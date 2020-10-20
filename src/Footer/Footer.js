import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='group3'>
          <div className='item-footer'>
            <h3>GleamSIS</h3>
          </div>
          <div className='item-footer'>
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Media</p>
          </div>
          <div className='item-footer'>
            <h4>Solutions</h4>
            <p>Information Systems</p>
            <p>Management Systems</p>
          </div>
          <div className='item-footer'>
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone</p>
          </div>
        </div>
        <p className='copy'>Copyrights</p>
      </div>
    )
  }
}

export default Footer;