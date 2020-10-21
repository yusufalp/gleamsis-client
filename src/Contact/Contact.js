import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>Contact us with your inquiries</h2>
        </header>
        <main>
          <form action='https://formspree.io/f/xaypjzbq' method='POST'>
            <label>
              <input type='text' placeholder='Name' required />
            </label>
            <label>
              <input type='email' name='_replyto' placeholder='Email' required />
            </label>
            <label>
              <textarea name='message' cols='20' rows='8' placeholder='Message' required></textarea>
            </label>
            <button type='submit'>Send</button>
            <p className='required'>All fields are required</p>
          </form>
        </main>
      </div>
    )
  }
}

export default Contact;