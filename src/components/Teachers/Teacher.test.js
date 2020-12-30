import React from 'react';
import ReactDOM from 'react-dom';
import Teacher from './Teacher';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Teacher component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Teacher />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Teacher />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})