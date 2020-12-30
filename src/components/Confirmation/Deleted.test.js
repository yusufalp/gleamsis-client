import React from 'react';
import ReactDOM from 'react-dom';
import Deleted from './Deleted';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Deleted component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Deleted />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Deleted />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})