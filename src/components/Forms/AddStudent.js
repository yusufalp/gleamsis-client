import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class AddStudent extends React.Component {
  static contextType = DataContext;
  state = {
    firstName: '',
    lastName: '',
    courseId: '',
    grade: '',
    error: ''
  }
  handleStudentFName(value) {
    this.setState({
      firstName: value.trim()
    })
  }
  handleStudentLName(value) {
    this.setState({
      lastName: value.trim()
    })
  }
  handleCourseId(value) {
    this.setState({
      courseId: value
    })
  }
  handleGrade(value) {
    this.setState({
      grade: value
    })
  }
  handleStudentSubmit(e) {
    e.preventDefault();

    const newStudent = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      course_id: Number(this.state.courseId),
      grade: this.state.grade
    }

    this.context.addStudent(newStudent);
  }
  render() {
    return (
      <div>
        <header>
          <h2>Add a Student</h2>
        </header>
        <p className='add-info'>
          Use the form below to add a student. You must add a student to a current course. If the course
          does not exist, <Link to={'/add-course'} className='form-link'>add the course</Link> first.
        </p>
        <form onSubmit={e => this.handleStudentSubmit(e)}>
          <label htmlFor='firstName'></label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            onChange={e => this.handleStudentFName(e.target.value)}
            placeholder='First Name'
            required
          />
          <label htmlFor='lastName'></label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            onChange={e => this.handleStudentLName(e.target.value)}
            placeholder='Last Name'
            required
          />
          <label htmlFor='course'></label>
          <select
            name='course'
            id='grade'
            required
            onChange={e => this.handleCourseId(e.target.value)}>
            <option value=''>Select a Course</option>
            {this.context.courses.map((course, i) =>
              <option key={i} value={course.id}>{course.name}</option>
            )}
          </select>
          <label htmlFor='grade'></label>
          <select
            type='text'
            name='grade'
            id='grade'
            required
            onChange={e => this.handleGrade(e.target.value)}>
            <option value=''>Select a Grade</option>
            {['A', 'B', 'C', 'D', 'F'].map((grade, i) =>
              <option key={i}>{grade}</option>
            )}
          </select>
          <button type='submit'>Add Student</button>
          <p>{this.state.error}</p>
          <p className='required'>* = required fields</p>
        </form>
      </div>
    )
  }
}

export default AddStudent; 