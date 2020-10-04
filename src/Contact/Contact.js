import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>Contact us with your inquiries</h2>
        </header>
        <main>
          <form action="">
            <label htmlFor="fullname"></label>
            <input type="text" name="fullname" id="fullname" placeholder="Full Name" required />
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="Email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    )
  }
}

export default Contact;