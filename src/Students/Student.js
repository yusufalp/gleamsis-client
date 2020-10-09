import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Student extends React.Component {
  static contextType = DataContext;
  state = {
    showMessage: false,
    message: ''
  }
  handleDeleteStudent(student) {
    let answer = prompt('BE CAREFUL! If you delete a student, they will be removed from all the courses they are registered. Do you want to confirm delete student? (Yes/No)')
    if (answer.toLowerCase().trim() === 'yes') {
      this.context.deleteStudent(student)
      this.props.history.push('/deleted')
    } else {
      this.setState({
        showMessage: true,
        message: 'Student is NOT deleted'
      })
    }
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
        <button className='btn-teacher' onClick={e => this.handleDeleteStudent(student)}>Delete Student</button>
        <p className={`${this.state.showMessage ? "" : "hidden"}`}>{this.state.message}</p>
      </div>
    )
  }
}

export default Student;