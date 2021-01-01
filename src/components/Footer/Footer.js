import React from 'react';
import './Footer.css';

const year = new Date().getFullYear();

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='group3'>
          <div className='item-footer'>
            <h3>GleamSIS</h3>
            <p>123 Sesame St,</p>
            <p>San Francisco, CA 94105</p>
            <p>415-123-4567</p>
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
        </div>
        <p className='copy'>Copyrights &#169; Yusuf Alp 2020-${year}</p>
      </div>
    );
  }
}

export default Footer;