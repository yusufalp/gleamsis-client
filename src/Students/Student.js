import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Student extends React.Component {
  static contextType = DataContext;
  state = {
    confirm: false,
    message: '',
  }
  handleConfirmStudent(student) {
    this.setState({
      confirm: true,
      message: `Do you want to delete student ${student.firstName} ${student.lastName}?`
    })
  }
  handleConfirmDelete = (student) => {

    this.context.deleteStudent(student)
    this.setState({
      confirm: false
    })
    this.props.history.push('/deleted')
  }
  handleCancelDelete = () => {
    this.setState({
      confirm: false
    })
  }

  render() {
    let student = this.context.students.find(student => student.id === Number(this.props.match.params.id))
    let courses = this.context.students.filter(course => course.firstName === student.firstName)
    let courseIndex = [];
    let enrolledCourses = []
    courses.forEach(courses => courseIndex.push(courses.course_id))
    for (let i = 0; i < courseIndex.length; i++) {
      let courseObj = this.context.courses.find(course => Number(course.id) === Number(courseIndex[i]))
      enrolledCourses.push(courseObj)
    }
    return (
      <div>
        <h2>Hello admin,</h2>
        <p>This is {student.firstName} {student.lastName}'s information</p>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: {student.lastName}</p>
        <p>Courses enrolled: </p>
        {enrolledCourses.map((course, i) =>
          <p key={i}><Link to={`/courses/${course.id}`}>{course.name}</Link></p>
        )}
        <button className='btn-teacher' onClick={e => this.handleConfirmStudent(student)}>Delete Student</button>

        <div className={`${this.state.confirm ? "" : "hidden"}`}>
          <p >{this.state.message}</p>
          <button onClick={e => this.handleConfirmDelete(student)}>Yes</button>
          <button onClick={this.handleCancelDelete}>No</button>
        </div>
      </div>
    )
  }
}

export default Student;