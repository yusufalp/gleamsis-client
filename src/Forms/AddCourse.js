import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class AddCourse extends React.Component {
  static contextType = DataContext
  state = {
    name: '',
    category: '',
    teacherId: '',
    error: ''
  }
  handleCourseName(value) {
    this.setState({
      name: value.trim()
    })
  }
  handleCourseCategory(value) {
    this.setState({
      category: value
    })
  }
  handleTeacherId(value) {
    this.setState({
      teacherId: value
    })
  }
  handleCourseSubmit(e) {
    e.preventDefault()

    let newCourse = {
      id: this.context.courses.length + 1,
      name: this.state.name,
      category: this.state.category,
      teacher_id: Number(this.state.teacherId)
    }

    console.log(newCourse)
    // add newCourse to the context
  }
  render() {
    return (
      <div>
        <h2>Add a Course</h2>
        <p>
          Use the form below to add a course. You must add a course if there is a teacher to teach it.
          If the teacher does not exist, <Link to={'/AddTeacher'}>add the teacher</Link> first.
      </p>
        <form onSubmit={e => this.handleCourseSubmit(e)}>
          <label htmlFor='name'>Course Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={e => this.handleCourseName(e.target.value)}
            required
          />
          <label htmlFor='category'>Category</label>
          <input
            type='text'
            name='category'
            id='category'
            onChange={e => this.handleCourseCategory(e.target.value)}
            required
          />
          <label htmlFor='teacher'>Teacher</label>
          <select
            name='teacher'
            id='teacher'
            required
            onChange={e => this.handleTeacherId(e.target.value)}>
            <option value="">Select a Teacher</option>
            {this.context.teachers.map((teacher, i) =>
              <option key={i} value={teacher.id}>{teacher.firstName}</option>
            )}
          </select>
          <button type="submit">Add Teacher</button>
          <p>{this.state.error}</p>
        </form>
      </div>
    )
  }
}

export default AddCourse;