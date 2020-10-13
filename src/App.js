import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Demo from './Demo/Demo';
import Dashboard from './Dashboard/Dashboard';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Courses from './Courses/Courses';
import Teacher from './Teachers/Teacher';
import Student from './Students/Student';
import AddTeacher from './Forms/AddTeacher';
import AddStudent from './Forms/AddStudent';
import AddCourse from './Forms/AddCourse';
import Success from './Confirmation/Success';
import Deleted from './Confirmation/Deleted';
import Page404 from './Page404/Page404';

import DataContext from './DataContext';

import config from './config';

class App extends React.Component {
  state = {
    teachers: [],
    students: [],
    courses: [],
  }
  componentDidMount() {
    this.getTeachers()
    this.getStudents()
    this.getCourses()
  }
  getTeachers = () => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/teachers`)
      .then(res => res.json())
      .then(teachers => {
        this.setState({
          teachers
        })
      })
      .catch(err => console.log(err))
  }
  getStudents = () => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/students`)
      .then(res => res.json())
      .then(students => {
        this.setState({
          students
        })
      })
      .catch(err => console.log(err))
  }
  getCourses = () => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/courses`)
      .then(res => res.json())
      .then(courses => {
        this.setState({
          courses
        })
      })
      .catch(err => console.log(err))
  }
  addTeacher = (newTeacher) => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/teachers`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        first_name: newTeacher.firstName,
        last_name: newTeacher.lastName
      })
    })
      .then(() => {
        this.getTeachers()
        this.props.history.push('/success')
      })
      .catch(err => console.log(err))
  }
  addCourse = (newCourse) => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/courses`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: newCourse.name,
        category: newCourse.category,
        teacher_id: newCourse.teacher_id
      })
    })
      .then(() => {
        this.getCourses()
        this.props.history.push('/success')
      })
      .catch(err => console.log(err))
  }
  addStudent = (newStudent) => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/students`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        first_name: newStudent.firstName,
        last_name: newStudent.lastName,
        course_id: newStudent.course_id,
        grade: newStudent.grade
      })
    })
      .then(() => {
        this.getStudents()
        this.props.history.push('/success')
      })
      .catch(err => console.log(err))
  }
  deleteTeacher = (teacher) => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/teachers/${teacher.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        this.getTeachers()
        this.getCourses()
        this.props.history.push('/deleted')
      })
  }
  deleteStudent = (student) => {
    const url = config.BASE_API_URL
    fetch(`${url}/api/students/${student.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        this.getStudents()
        this.props.history.push('/deleted')
      })
  }

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
    }
    return (
      <div className="App" >
        <DataContext.Provider value={contextValue}>
          <Navbar />
          <Switch>
            <Route
              exact path="/"
              component={Home}
            />
            <Route
              path="/demo"
              component={Demo}
            />
            <Route
              path="/dashboard"
              component={Dashboard}
            />
            <Route
              path="/pricing"
              component={Pricing}
            />
            <Route
              path="/about"
              component={About}
            />
            <Route
              path="/contact"
              component={Contact}
            />
            <Route
              path="/courses/:id"
              component={Courses}
            />
            <Route
              path="/teachers/:id"
              component={Teacher}
            />
            <Route
              path="/students/:id"
              component={Student}
            />
            <Route
              path="/add-teacher"
              component={AddTeacher}
            />
            <Route
              path="/add-student"
              component={AddStudent}
            />
            <Route
              path="/add-course"
              component={AddCourse}
            />
            <Route
              path="/success"
              component={Success}
            />
            <Route
              path="/deleted"
              component={Deleted}
            />
            <Route
              component={Page404}
            />
          </Switch>
        </DataContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);
