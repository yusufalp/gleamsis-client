import React from 'react';
import DashMessage from '../Tables/MessageTable';
import ExpenditureTable from '../Tables/ExpenditureTable';
import Teachers from './Teachers';
import STORE from '../STORE/STORE';

class Dashboard extends React.Component {
  handleAdd = () => {
    console.log('add clicked')
  }
  handleDelete = () => {
    console.log('delete clicked')
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Dashboard</h2>
        <div className="group">
          <div className="item-dash">
            <h3>Messages</h3>
            <DashMessage />
          </div>
          <div className="item-dash">
            <h3>Expenditure</h3>
            <ExpenditureTable />
          </div>
        </div>
        <div className="group">
          <div className="item-dash">
            <h3>Teachers</h3>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th colSpan="3">Courses</th>
                </tr>
              </thead>
              {STORE.courses.map((course, i) =>
                <Teachers key={i} course={course} />
              )}
            </table>
            <button onSubmit={this.handleAdd}>Add Teacher</button>
            <button onSubmit={this.handleDelete}>Delete Teacher</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;