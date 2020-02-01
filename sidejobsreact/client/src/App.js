import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Landing from './pages/Landing';
import Results from './pages/Results';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import UserProfile from './pages/UserProfile';
import Nav from "./components/Nav";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/userprofile" component={UserProfile} />

          {/* <Route exact path="/userprofile/id" component={UserProfile} /> */}
          {/* <Route exact path="/jobs" component={Results} /> */}
          {/* <Route exact path="/jobs/:id" component={Job} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
