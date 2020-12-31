import React from 'react';
import ReactDOM from 'react-dom';
import ExpenditureTable from './ExpenditureTable';
import renderer from 'react-test-renderer';

describe('ExpenditureTable component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExpenditureTable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ExpenditureTable />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});