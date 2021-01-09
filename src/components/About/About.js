import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <header className='about'>
        <h2 className='about-title'>About GleamSIS</h2>
        <p>
          We are a one stop solution for all of your student information systems. Born in 2020,
          will solve all of your school information system needs.
          </p>
        <main>
          <section>
            <h3>Why GleamSIS</h3>
            <p>
              GleamSIS is born because educators needed it. In education, we are
              generating so many data such as grades, contact information, student, teacher
              and parent experience, keeping track of progress, both academically and personally.
              That is why we made GleamSIS.
              </p>
            <p>
              With GleamSIS, you can see student and teacher information, course information, students'
              registered courses and their grades. Our future expansions will include much more
              capabilities and will involve parents too.
              </p>
            <p>
              Feel free to explore our product and contact us if you have more questions
              </p>
          </section>
        </main>
      </header>
    </div>
  );
}

export default About;