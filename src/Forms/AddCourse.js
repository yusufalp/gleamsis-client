import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class AddCourse extends React.Component {
  static contextType = DataContext;
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
      category: value.trim()
    })
  }
  handleTeacherId(value) {
    this.setState({
      teacherId: value
    })
  }
  handleCourseSubmit(e) {
    e.preventDefault();

    // Checks if the required information is entered to create a new course
    if (!this.state.name || !this.state.category || !this.state.teacherId) {
      this.setState({
        error: 'Name, category and teacher are required'
      })
      return;
    }

    let newCourse = {
      name: this.state.name,
      category: this.state.category,
      teacher_id: Number(this.state.teacherId)
    }

    this.context.addCourse(newCourse);
  }
  render() {
    return (
      <div>
        <header>
          <h2>Add a Course</h2>
        </header>
        <p className='add-info'>
          Use the form below to add a course. You must add a course if there is a teacher to teach it.
          If the teacher does not exist, <Link to={'/add-teacher'} className='form-link'>add the teacher</Link> first.
      </p>
        <form onSubmit={e => this.handleCourseSubmit(e)}>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={e => this.handleCourseName(e.target.value)}
            placeholder='Course Name'
            required
          />
          <label htmlFor='category'></label>
          <input
            type='text'
            name='category'
            id='category'
            onChange={e => this.handleCourseCategory(e.target.value)}
            placeholder='Category'
            required
          />
          <label htmlFor='teacher'></label>
          <select
            name='teacher'
            id='teacher'
            required
            onChange={e => this.handleTeacherId(e.target.value)}>
            <option value=''>Select a Teacher</option>
            {this.context.teachers.map((teacher, i) =>
              <option key={i} value={teacher.id}>{teacher.first_name} {teacher.last_name}</option>
            )}
          </select>
          <button type='submit'>Add Course</button>
          <p>{this.state.error}</p>
          <p className='required'>* = required fields</p>
        </form>
      </div>
    )
  }
}

export default AddCourse;