import React from 'react';
import STORE from '../STORE/STORE_alt';

class Teachers extends React.Component {
  render() {
    let teachers = STORE.teachers.find(teacher => teacher.id === this.props.course.teacher_id)
    let course = this.props.course
    return (
      <tbody>
        <tr>
          <td>{teachers.firstName} </td>
          <td>{teachers.lastName}</td>
          <td>
            <p
              className="course-names">
              <a href={`/courses/${course.id}`}>
                {course.name}
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    )
  }
}

export default Teachers;