import React from 'react';
import ReactDOM from 'react-dom';
import AddTeacher from './AddTeacher';
import renderer from 'react-test-renderer';

describe('AddTeacher component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddTeacher />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddTeacher />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});