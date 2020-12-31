import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import renderer from 'react-test-renderer';

describe('Contact component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contact />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Contact />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});