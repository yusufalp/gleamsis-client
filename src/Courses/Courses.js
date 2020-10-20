import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Courses extends React.Component {
  static contextType = DataContext;
  render() {
    let course = this.context.courses.find(course => course.id === Number(this.props.match.params.id)) || {}
    let teacher = this.context.teachers.find(teacher => teacher.id === course.teacher_id) || {}
    let students = this.context.students.filter(students => students.course_id === course.id)
    return (
      <div className='dash'>
          <h3>Hello {teacher.first_name}, this is {course.name} class</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          {students.map((student, i) =>
            <tbody key={i}>
              <tr>
                <td><Link to={`/students/${student.id}`}>{student.first_name}</Link><hr /></td>
                <td><Link to={`/students/${student.id}`}>{student.last_name}</Link><hr /></td>
                <td>{student.grade}<hr /></td>
              </tr>
            </tbody>
          )}
        </table>
        <p className={`${students.length === 0 ? "" : "hidden"}`}>No students are registered for this class</p>
        <button type='submit'><Link to={'/add-student'}>Add Student</Link></button>
      </div>
    )
  }
}

export default Courses;