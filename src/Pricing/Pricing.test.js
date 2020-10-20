import React from 'react';
import ReactDOM from 'react-dom';
import Pricing from './Pricing';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

describe('Pricing component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Pricing />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})