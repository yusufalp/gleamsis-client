import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student';
import renderer from 'react-test-renderer';

describe('Student component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Student />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Student />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});