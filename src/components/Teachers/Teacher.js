import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Teacher extends React.Component {
  static contextType = DataContext;
  state = {
    confirm: false,
    message: ''
  };
  handleDeleteTeacher = (teacher) => {
    this.setState({
      confirm: true,
      message: `BE CAREFUL. Deleting a teacher will delete all the courses this teacher is assigned. Do you want to delete teacher ${teacher.first_name} ${teacher.last_name}?`
    });
  };
  handleConfirmTeacher = (teacher) => {
    this.context.deleteTeacher(teacher);
    this.setState({
      confirm: false
    });
  };
  handleCancelTeacher = () => {
    this.setState({
      confirm: false
    });
  };

  render() {
    let teacher = [];
    let courses = [];
    teacher = this.context.teachers.find(teacher => teacher.id === Number(this.props.match.params.id)) || {};
    courses = this.context.courses.filter(course => course.teacher_id === teacher.id);
    return (
      <div className='dash'>
        <h2>Hello admin,</h2>
        <div className='card-display'>
          <p>This is {teacher.first_name} {teacher.last_name}'s information</p>
          <p>First Name: {teacher.first_name}</p>
          <p>Last Name: {teacher.last_name}</p>
        </div>
        <div className='card-display'>
          <p>Courses teaching:</p>
          {courses.map((course, i) =>
            <p key={i}><Link to={`/courses/${course.id}`}>{course.name}</Link></p>
          )}
        </div>
        <button
          type='submit'
          className={`${teacher.id === 0 ? 'hidden' : ''}`}
          onClick={e => this.handleDeleteTeacher(teacher)}>Delete Teacher</button>
        <div className={`delete-message ${this.state.confirm ? '' : 'hidden'}`}>
          <p>{this.state.message}</p>
          <button onClick={e => this.handleConfirmTeacher(teacher)} className='btn-delete'>Yes</button>
          <button onClick={this.handleCancelTeacher}>No</button>
        </div>
      </div>
    );
  }
}

export default Teacher;