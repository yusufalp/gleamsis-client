import React from 'react';
import ReactDOM from 'react-dom';
import AddStudent from './AddStudent';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('AddStudent component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <AddStudent />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <AddStudent />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})