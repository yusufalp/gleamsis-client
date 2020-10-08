import React from 'react';
import DataContext from '../DataContext';

class AddTeacher extends React.Component {
  static contextType = DataContext;
  state = {
    teacherFName: '',
    teacherLName: '',
    error: ''
  }
  handleTeacherFName(value) {
    this.setState({
      teacherFName: value.trim()
    })
  }
  handleTeacherLName(value) {
    this.setState({
      teacherLName: value.trim()
    })
  }
  handleTeacherSubmit(e) {
    e.preventDefault();
    let newTeacherFName = this.state.teacherFName
    let newTeacherLName = this.state.teacherLName

    if (!newTeacherFName || !newTeacherLName) {
      this.setState({
        error: "Teacher first and last name are required"
      })
      return
    }

    let newTeacher = {
      id: this.context.teachers.length,
      firstName: newTeacherFName,
      lastName: newTeacherLName
    }

    console.log(newTeacher)
    //Add newTeacher to the context 
    this.context.addTeacher(newTeacher)

    this.props.history.push("/success")
  }
  render() {
    return (
      <div>
        <h2>Add a Teacher</h2>
        <form onSubmit={e => this.handleTeacherSubmit(e)}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            onChange={e => this.handleTeacherFName(e.target.value)}
            required
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            onChange={e => this.handleTeacherLName(e.target.value)}
            required
          />
          <button type="submit">Add Teacher</button>
          <p>{this.state.error}</p>
        </form>
      </div>
    )
  }
}

export default AddTeacher;