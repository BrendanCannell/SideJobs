import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUp from "./pages/SignUp/SignUp.js";
import Landing from './pages/Landing/Landing';
import Results from './pages/Results/Results';
import SignIn from './pages/SignIn/SignIn';
import NewPost from './pages/NewPost/NewPost';
// import SignOut from './pages/SignOut/SignOut.js';
import UserProfile from './pages/UserProfile';
import Nav from "./components/Nav/index";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signin" component={SignIn} />
          {/* <Route exact path="/signout" component={SignOut} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/userprofile/id" component={UserProfile} />
          <Route exact path="/jobs" component={Results} />
          <Route exact path="/form" component={NewPost} />
          {/* <Route exact path="/" component={Results} /> */}
          {/* <Route exact path="/jobs/:id" component={Job} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>      
    </Router>
  )
}
export default App;
