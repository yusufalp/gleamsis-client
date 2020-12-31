import React from 'react';
import ReactDOM from 'react-dom';
import AddCourse from './AddCourse';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

describe('AddCourse component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <AddCourse />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <AddCourse />
        </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});