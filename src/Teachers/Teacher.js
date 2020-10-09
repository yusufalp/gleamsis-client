import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Teacher extends React.Component {
  static contextType = DataContext;
  state = {
    showMessage: false,
    message: ''
  }
  handleDeleteTeacher(teacher) {
    let answer = prompt('BE CAREFUL! If you delete a teacher, the COURSE and ALL STUDENTS associated with the teacher will be deleted too. Do you want to confirm delete teacher? (Yes/No)')
    if (answer.toLowerCase().trim() === 'yes') {
      this.context.deleteTeacher(teacher)
      this.props.history.push('/deleted')
    } else {
      this.setState({
        showMessage: true,
        message: 'Teacher is NOT deleted'
      })
    }
  }
  render() {
    let teacher = this.context.teachers.find(teacher => teacher.id === Number(this.props.match.params.id))
    let courses = this.context.courses.filter(course => course.teacher_id === teacher.id)
    return (
      <div>
        <h2>Hello admin,</h2>
        <p>This is {teacher.firstName} {teacher.lastName}'s information</p>
        <p>First Name: {teacher.firstName}</p>
        <p>Last Name: {teacher.lastName}</p>
        <p>Courses:</p>
        {courses.map((course, i) =>
          <p key={i}><Link to={`/courses/${course.id}`}>{course.name}</Link></p>
        )}
        <button
          className={`btn-teacher ${teacher.id === 0 ? "hidden" : ""}`}
          onClick={e => this.handleDeleteTeacher(teacher)}>Delete Teacher</button>
        <p className={`${this.state.showMessage ? "" : "hidden"}`}>{this.state.message}</p>
      </div>
    )
  }
}

export default Teacher;