import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>Contact us with your inquiries</h2>
        </header>
        <main>
          <form action="https://formspree.io/f/xaypjzbq" method="POST">
            <label>Your name:
              <input type="text" />
            </label>
            <label>Your email:
              <input type="email" name="_replyto" />
            </label>
            <label>Your message:
              <textarea name="message" cols="20" rows="8"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    )
  }
}



export default Contact;