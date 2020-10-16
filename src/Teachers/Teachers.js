import React from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext';

class Teachers extends React.Component {
  static contextType = DataContext
  render() {
    let teachers = this.context.teachers.find(teacher => teacher.id === this.props.course.teacher_id) || {}
    return (
        <tr>
          <td>
            <Link to={`/teachers/${teachers.id}`}>{teachers.first_name}</Link>
          </td>
          <td>
            <Link to={`/teachers/${teachers.id}`}>{teachers.last_name}</Link>
          </td>
          <td>
            <Link to={`/courses/${this.props.course.id}`}>
              {this.props.course.name}
            </Link>
          </td>
        </tr>
    )
  }
}

Teachers.defaultProps = {
  course: {}
}

export default Teachers;