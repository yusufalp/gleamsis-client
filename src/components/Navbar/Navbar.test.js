import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});