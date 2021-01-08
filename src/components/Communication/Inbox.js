import React from 'react';
import Message from './Message';
import './Inbox.css';

const messages = [
  {
    id: 'ec651dac',
    from: 'Yusuf',
    subject: 'Requesting purchase approval',
    content: `Paddle on both sides gain traction low engagement but we can't hear you. 
      Ladder up / ladder back to the strategy paddle on both sides, and it is all exactly 
      as i said, but i don't like it run it up the flagpole, ping the boss and circle back 
      touch base. Spinning our wheels we need to button up our approach. Globalize. Win-win.`,
    time: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    id: 'ec652126',
    from: 'Thinkful',
    subject: 'Congratulations',
    content: `We need to aspirationalise our offerings get six alpha pups in here for a focus 
      group the right info at the right time to the right people baseline. Can I just chime in on 
      that one hire the best. Run it up the flag pole who's the goto on this job with the way forward, 
      so going forward, so parallel path scope creep we need more paper or execute.`,
    time: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    id: 'ec65222a',
    from: 'Mr. OldSchool',
    subject: 'Implementing the new idea',
    content: `Out of scope old boys club drive awareness to increase engagement in an ideal world. 
      Your work on this project has been really impactful highlights but we want to empower the team 
      with the right tools and guidance to uplevel our craft and build better to be inspired is to 
      become creative, innovative and energized we want this philosophy to trickle down to all our 
      stakeholders, nor vec.`,
    time: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
]

const Inbox = () => {
  const renderedMessages = messages.map((message) => (
    <Message key={message.id} message={message} />
  )
  )

  return (
    <div>
      <h3>Messages</h3>
      <div className='inbox'>
        <p className='title from'>From</p>
        <p className='title subject'>Subject</p>
        <p className='title date'>Date</p>
      </div>
      {renderedMessages}
    </div>
  );
}

export default Inbox;