import React from 'react';

class AddTeacher extends React.Component {
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
      firstName: newTeacherFName,
      lastName: newTeacherLName
    }

    //Add newTeacher to the context 

    this.props.history.push("/teacher-success")
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleTeacherSubmit(e)}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            onChange={e => this.handleTeacherFName(e.target.value)}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            onChange={e => this.handleTeacherLName(e.target.value)}
          />
          <button type="submit">Add Teacher</button>
          <p>{this.state.error}</p>
        </form>
      </div>
    )
  }
}

export default AddTeacher;