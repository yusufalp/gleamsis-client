import React from 'react';
import ReactDOM from 'react-dom';
import Teachers from './Teachers';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Teachers component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('tbody');
    ReactDOM.render(
      <MemoryRouter>
        <Teachers />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Teachers />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});