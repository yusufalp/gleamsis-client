import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from './Confirmation';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Confirmation page component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Confirmation />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Confirmation />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});