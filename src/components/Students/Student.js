import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Student extends React.Component {
  static contextType = DataContext;
  state = {
    confirm: false,
    message: '',
  };
  handleConfirmStudent = (student) => {
    this.setState({
      confirm: true,
      message: `BE CAREFUL. Deleting a student removes the student from all of the classes registered. Do you want to delete student ${student.first_name} ${student.last_name}?`
    });
  };
  handleConfirmDelete = (student) => {
    this.context.deleteStudent(student);
    this.setState({
      confirm: false
    });
    this.props.history.push('/deleted');
  };
  handleCancelDelete = () => {
    this.setState({
      confirm: false
    });
  };

  render() {
    let student = [];
    let courses = [];
    student = this.context.students.find(student => student.id === Number(this.props.match.params.id)) || {};
    courses = this.context.students.filter(course => course.first_name === student.first_name);
    let courseIndex = [];
    let enrolledCourses = [];
    courses.forEach(courses => courseIndex.push(courses.course_id));
    if (!this.context.courses.error) {
      for (let i = 0; i < courseIndex.length; i++) {
        let courseObj = this.context.courses.find(course => Number(course.id) === Number(courseIndex[i]));
        enrolledCourses.push(courseObj);
      }
    }
    return (
      <div className='dash'>
        <h2>Hello admin,</h2>
        <div className='card-display'>
          <p>This is {student.first_name} {student.last_name}'s information</p>
          <p>First Name: {student.first_name}</p>
          <p>Last Name: {student.last_name}</p>
        </div>
        <div className='card-display'>
          <p>Courses enrolled: </p>
          {enrolledCourses.map((course, i) =>
            <p key={i}><Link to={`/courses/${course.id}`}>{course.name}</Link></p>
          )}
        </div>
        <button type='submit' onClick={e => this.handleConfirmStudent(student)}>Delete Student</button>
        <div className={`delete-message ${this.state.confirm ? '' : 'hidden'}`}>
          <p>{this.state.message}</p>
          <button onClick={e => this.handleConfirmDelete(student)} className='btn-delete'>Yes</button>
          <button onClick={this.handleCancelDelete}>No</button>
        </div>
      </div>
    );
  }
}

export default Student;