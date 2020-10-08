import React from 'react';
import { Link } from 'react-router-dom';
import DashMessage from '../Tables/MessageTable';
import ExpenditureTable from '../Tables/ExpenditureTable';
import Teachers from '../Teachers/Teachers';
import DataContext from '../DataContext';

class Dashboard extends React.Component {
  static contextType = DataContext
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
              {this.context.courses.map((course, i) =>
                <Teachers key={i} course={course}/>
              )}
            </table>
            <Link to={'/AddTeacher'} className="btn-teacher">Add Teacher</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;