import React from 'react';
import ReactDOM from 'react-dom';
import Page404 from './Page404';
import renderer from 'react-test-renderer';

describe('Page404 component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page404 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Page404 />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})