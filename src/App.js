import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Demo from './Demo/Demo';
import Dashboard from './Dashboard/Dashboard';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Courses from './Courses/Courses';
import Page404 from './Page404/Page404';
import Teacher from './Teachers/Teacher';
import AddTeacher from './Forms/AddTeacher';
import SuccessTeacher from './Success/SuccessTeacher';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
            path="/AddTeacher"
            component={AddTeacher}
          />
          <Route
            path="/teacher-success"
            component={SuccessTeacher}
          />
          <Route
            component={Page404}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
