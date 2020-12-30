import React from 'react';
import ReactDOM from 'react-dom';
import Courses from './Courses';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('Courses component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Courses />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Courses />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})