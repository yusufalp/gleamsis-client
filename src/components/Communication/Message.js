import React from 'react';

const Message = (props) => {
  return (
    <div className='inbox'>
      <p className='from'>{props.message.from}</p>
      <p className='subject'>{props.message.subject}</p>
      <p className='date'>{props.message.time}</p>
    </div>
  );
}

export default Message;