import React from 'react';
import { Link } from 'react-router-dom';
import Teachers from '../Teachers/Teachers';
import DataContext from '../DataContext';
import Inbox from '../Inbox/Inbox';
import Expenditures from '../Expenditures/Expenditures';

class Dashboard extends React.Component {
  static contextType = DataContext;
  render() {
    return (
      <div>
        <header>
          <h2>Welcome to your Dashboard</h2>
        </header>
        <div className='group'>
          <div className='item-dash card-display inbox-table'>
            <Inbox />
          </div>
          <div className='item-dash card-display exp-table'>
            <Expenditures />
          </div>
        </div>
        <div className='group'>
          <div className='item-dash card-display'>
            <h3>Courses</h3>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th colSpan='3'>Courses</th>
                </tr>
              </thead>
              <tbody>
                {!this.context.courses.error ? this.context.courses.map((course, i) =>
                  <Teachers key={i} course={course} />
                ) : ""}
              </tbody>
            </table>
            <Link to={'/add-teacher'} className='btn-add'>Add Teacher</Link>
            <Link to={'/add-course'} className='btn-add'>Add Course</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;