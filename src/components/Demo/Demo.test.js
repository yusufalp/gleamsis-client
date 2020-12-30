import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import renderer from 'react-test-renderer';

describe('Demo component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create( <Demo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})