import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});