import React from 'react';
import DataContext from '../DataContext';

class AddTeacher extends React.Component {
  static contextType = DataContext;
  state = {
    firstName: '',
    lastName: '',
    error: ''
  };
  handleTeacherFName(value) {
    this.setState({
      firstName: value.trim()
    })
  }
  handleTeacherLName(value) {
    this.setState({
      lastName: value.trim()
    })
  }
  handleTeacherSubmit(e) {
    e.preventDefault();
    let newTeacherFName = this.state.firstName;
    let newTeacherLName = this.state.lastName;

    // Checks if the required information is entered
    if (!newTeacherFName || !newTeacherLName) {
      this.setState({
        error: 'Teacher first and last name are required'
      });
      return;
    }

    let newTeacher = {
      first_name: newTeacherFName,
      last_name: newTeacherLName
    };

    this.context.addTeacher(newTeacher);
  }
  render() {
    return (
      <div>
        <header>
          <h2>Add a Teacher</h2>
        </header>
        <form onSubmit={e => this.handleTeacherSubmit(e)}>
          <label htmlFor='firstName'></label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            onChange={e => this.handleTeacherFName(e.target.value)}
            placeholder='First Name'
            required
          />
          <label htmlFor='lastName'></label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            onChange={e => this.handleTeacherLName(e.target.value)}
            placeholder='Last Name'
            required
          />
          <button type='submit'>Add Teacher</button>
          <p>{this.state.error}</p>
          <p className='required'>* = required fields</p>
        </form>
      </div>
    );
  }
}

export default AddTeacher;