import React from 'react';
import ReactDOM from 'react-dom';
import Testimonials from './Testimonials';
import renderer from 'react-test-renderer';

describe('Testimonials component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Testimonials />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create( <Testimonials />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})