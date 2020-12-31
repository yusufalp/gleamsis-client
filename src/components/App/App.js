import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Demo from '../Demo/Demo';
import Dashboard from '../Dashboard/Dashboard';
import Pricing from '../Pricing/Pricing';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Courses from '../Courses/Courses';
import Teacher from '../Teachers/Teacher';
import Student from '../Students/Student';
import AddTeacher from '../Forms/AddTeacher';
import AddStudent from '../Forms/AddStudent';
import AddCourse from '../Forms/AddCourse';
import Success from '../Confirmation/Success';
import Deleted from '../Confirmation/Deleted';
import Page404 from '../Page404/Page404';
import Footer from '../Footer/Footer';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';

import DataContext from '../DataContext';

import config from '../../config';
import TokenService from '../../services/token-service';

const url = config.BASE_API_URL;

class App extends React.Component {
  state = {
    teachers: [],
    students: [],
    courses: [],
  };
  componentDidMount() {
    this.getTeachers();
    this.getStudents();
    this.getCourses();
  }
  getTeachers = () => {
    fetch(`${url}/api/teachers`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => res.json())
      .then(teachers => {
        this.setState({
          teachers
        })
      })
      .catch(err => console.log(err))
  };
  getStudents = () => {
    fetch(`${url}/api/students`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => res.json())
      .then(students => {
        this.setState({
          students
        })
      })
      .catch(err => console.log(err))
  };
  getCourses = () => {
    fetch(`${url}/api/courses`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      }
    })
      .then(res => res.json())
      .then(courses => {
        this.setState({
          courses
        })
      })
      .catch(err => console.log(err))
  };
  addTeacher = (newTeacher) => {
    fetch(`${url}/api/teachers`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        first_name: newTeacher.first_name,
        last_name: newTeacher.last_name
      })
    })
      .then(() => {
        this.getTeachers();
        this.props.history.push('/success');
      })
      .catch(err => console.log(err))
  };
  addCourse = (newCourse) => {
    fetch(`${url}/api/courses`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name: newCourse.name,
        category: newCourse.category,
        teacher_id: newCourse.teacher_id
      })
    })
      .then(() => {
        this.getCourses();
        this.props.history.push('/success');
      })
      .catch(err => console.log(err))
  }
  addStudent = (newStudent) => {
    fetch(`${url}/api/students`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        first_name: newStudent.first_name,
        last_name: newStudent.last_name,
        course_id: newStudent.course_id,
        grade: newStudent.grade
      })
    })
      .then(() => {
        this.getStudents();
        this.props.history.push('/success');
      })
      .catch(err => console.log(err))
  };
  deleteTeacher = (teacher) => {
    fetch(`${url}/api/teachers/${teacher.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      }
    })
      .then(() => {
        // When deleting a teacher, all the courses the teacher teaching
        // must be deleted too.
        this.getTeachers();
        this.getCourses();
        this.props.history.push('/deleted');
      })
  };
  deleteStudent = (student) => {
    fetch(`${url}/api/students/${student.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`,
      }
    })
      .then(() => {
        this.getStudents();
        this.props.history.push('/deleted');
      })
  };

  render() {
    const contextValue = {
      teachers: this.state.teachers,
      students: this.state.students,
      courses: this.state.courses,
      addTeacher: this.addTeacher,
      addCourse: this.addCourse,
      addStudent: this.addStudent,
      deleteTeacher: this.deleteTeacher,
      deleteStudent: this.deleteStudent,
      getTeachers: this.getTeachers,
      getStudents: this.getStudents,
      getCourses: this.getCourses
    };
    return (
      <div className='App' >
        <DataContext.Provider value={contextValue}>
          <Navbar />
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <PublicOnlyRoute
              path='/demo'
              component={Demo}
            />
            <PrivateRoute
              path='/dashboard'
              component={Dashboard}
            />
            <Route
              path='/pricing'
              component={Pricing}
            />
            <Route
              path='/about'
              component={About}
            />
            <Route
              path='/contact'
              component={Contact}
            />
            <PrivateRoute
              path='/courses/:id'
              component={Courses}
            />
            <PrivateRoute
              path='/teachers/:id'
              component={Teacher}
            />
            <PrivateRoute
              path='/students/:id'
              component={Student}
            />
            <PrivateRoute
              path='/add-teacher'
              component={AddTeacher}
            />
            <PrivateRoute
              path='/add-student'
              component={AddStudent}
            />
            <PrivateRoute
              path='/add-course'
              component={AddCourse}
            />
            <PrivateRoute
              path='/success'
              component={Success}
            />
            <PrivateRoute
              path='/deleted'
              component={Deleted}
            />
            <Route
              component={Page404}
            />
          </Switch>
          <Footer />
        </DataContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);
