import React from 'react';
import ReactDOM from 'react-dom';
import Success from './Success';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Success component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Success />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Success />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});