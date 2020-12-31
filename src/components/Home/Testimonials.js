import React from 'react';

class Testimonials extends React.Component {
  render() {
    let testimonials = [
      {
        quote: 'GleamSIS has saved us more than half of the time we used to spend organizing data about our students, parents and teachers. Now with a few clicks we can access it right away. User friendly, practical and just exactly what we need.',
        author: '—Sevde Meva Alp,',
        cite: 'Principal at That School'
      },
    ];
    return (
      <div>
        {testimonials.map((testimonial, i) =>
          <blockquote key={i} cite='https://www.huxley.net/bnw/four.html'>
            <p className='quote'>{testimonial.quote}</p>
            <p>{testimonial.author} <cite>{testimonial.cite}</cite></p>
          </blockquote>
        )}
      </div>
    );
  }
}

export default Testimonials;