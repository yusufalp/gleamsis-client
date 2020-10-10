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
import STORE from './STORE/STORE';

class App extends React.Component {
  state = {
    teachers: STORE.teachers,
    students: STORE.students,
    courses: STORE.courses,
  }
  addTeacher = (newTeacher) => {
    if (newTeacher) {
      this.setState({
        teachers: [...this.state.teachers, newTeacher]
      })
    }
  }
  addCourse = (newCourse) => {
    if (newCourse) {
      this.setState({
        courses: [...this.state.courses, newCourse]
      })
    }
  }
  addStudent = (newStudent) => {
    if (newStudent) {
      this.setState({
        students: [...this.state.students, newStudent]
      })
    }
  }
  deleteTeacher = (teacher) => {
    if (teacher) {
      let newTeacherList = this.state.teachers.filter(teachers => teachers.id !== teacher.id)
      let newCourseList = this.state.courses.filter(courses => courses.teacher_id !== teacher.id)
      this.setState({
        teachers: newTeacherList,
        courses: newCourseList
      })
    }
  }
  deleteStudent = (student) => {
    if (student) {
      let newStudentList = this.state.students.filter(students => students.firstName !== student.firstName)
      this.setState({
        students: newStudentList
      })
    }
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
      deleteStudent: this.deleteStudent
    }
    return (
      <div className="App">
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
