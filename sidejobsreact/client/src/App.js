import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Results from "./pages/Results.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import UserProfile from "./pages/UserProfile.js";



function App() {
  return (
    <Router>
      <Switch>
      {/* <Route path="/">
          <Landing />
        </Route> */}
        <Route path="/Landing">
          <Landing />
        </Route>
        <Route path="/Results">
          <Results />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/UserProfile">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
