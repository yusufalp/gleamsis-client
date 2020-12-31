import React from 'react';
import ReactDOM from 'react-dom';
import MessageTable from './MessageTable';
import renderer from 'react-test-renderer';

describe('MessageTable component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageTable />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<MessageTable />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});