import React from 'react';
import STORE from '../STORE/STORE';

class Courses extends React.Component {
  render() {
    let course = STORE.courses.find(course => course.id === Number(this.props.match.params.id))
    let teacher = STORE.teachers.find(teacher => teacher.id === course.teacher_id)
    let students = STORE.students.filter(students => students.course_id === course.id)
    return (
      <div>
        <h3>Hello {teacher.firstName}, this is {course.name} class</h3>
        <table>
          {/* <caption>List of students</caption> */}
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
                <td>{student.firstName}<hr /></td>
                <td>{student.lastName}<hr /></td>
                <td>{student.grade}<hr /></td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    )
  }
}

export default Courses;