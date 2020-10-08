import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
import Success from './Success/Success';
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
  componentDidMount() {
    this.addTeacher()
    this.addCourse()
    this.addStudent()
  }
  render() {
    const contextValue = {
      teachers: this.state.teachers,
      students: this.state.students,
      courses: this.state.courses,
      addTeacher: this.addTeacher,
      addCourse: this.addCourse,
      addStudent: this.addStudent
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
              path="/AddTeacher"
              component={AddTeacher}
            />
            <Route
              path="/AddStudent"
              component={AddStudent}
            />
            <Route
              path="/AddCourse"
              component={AddCourse}
            />
            <Route
              path="/success"
              component={Success}
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

export default App;
