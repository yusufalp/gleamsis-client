import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Demo from './Demo/Demo';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Contact from './Contact/Contact';
import Page404 from './Page404/Page404';

import { Route, Switch } from 'react-router-dom';

function App() {
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
          component={Page404}
        />
      </Switch>
    </div>
  );
}

export default App;
