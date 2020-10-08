import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Teachers extends React.Component {
  static contextType = DataContext
  render() {
    let teachers = this.context.teachers.find(teacher => teacher.id === this.props.course.teacher_id)
    return (
      <tbody>
        <tr>
          <td>
            <Link to={`/teachers/${teachers.id}`}>{teachers.firstName}</Link>
          </td>
          <td>
            <Link to={`/teachers/${teachers.id}`}>{teachers.lastName}</Link>
          </td>
          <td>
            <Link to={`/courses/${this.props.course.id}`}>
              {this.props.course.name}
            </Link>
          </td>
        </tr>
      </tbody>
    )
  }
}

export default Teachers;