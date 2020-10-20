import React from 'react';

class Testimonials extends React.Component {
  render() {
    let testimonials = [
      {
        quote: 'Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.',
        author: '—Aldous Huxley,',
        cite: 'Brave New World'
      },
    ]
    return (
      <div>
        {testimonials.map((testimonial, i) =>
          <blockquote key={i} cite="https://www.huxley.net/bnw/four.html">
            <p className='quote'>{testimonial.quote}</p>
            <p>{testimonial.author} <cite>{testimonial.cite}</cite></p>
          </blockquote>
        )}
      </div>
    )
  }
}

export default Testimonials;