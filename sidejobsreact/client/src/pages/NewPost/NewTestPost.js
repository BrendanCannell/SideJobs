import React, { Component } from "react";


// Make the form send data

// if wanted to turn into a login form, login local state
// would have an API/server connected through axios with all the methods
// instead of clearing the field like this, run post routes on axios pages
// 

class NewPost extends Component {
  state = {
    email: '',
    fullName:''
  };
  // curly braces indicates empty object
  handleOnChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClearButton = () => {
    this.setState({email: ''});
    this.setState({fullName: ''})
  };

// validation
// server validation

// block any information or requests which will fail
// error displaying function
// conditional display on page for each input box errors
// two functions, pushing, emptying

// validation on the back end, what if someone tries to sign up with the same email twice


  handleEnterButton = () => {
  // write validation strings here
  //   this.state.email
  //   this.state.fullName
  };
  // on api or here, craft into an object
  // try not to mess around with state here, mess with it on a different page

  // run api file with paths
  // router paths look good
  // separate for writing, then push all together
  // put in controller, new object based on req.body
  // separate req.body into parts

  // don't have mongoDB validate your object

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input
          type="text"
          name="email"
          onChange={e => {
            this.handleOnChange(e);
          }}
          value={this.state.email}
          placeholder='Email'
        ></input>
        <input
          type="text"
          name="fullName"
          onChange={e => {
            this.handleOnChange(e);
          }}
          value={this.state.fullName}
          placeholder='Full Name'
        ></input>
        {/* embedding state needs no quotes */}
        <button onClick={this.handleClearButton}>Clear</button>
        <button onClick={this.handleEnterButton}>Input Data</button>
      </div>
    );
  }
}

export default NewPost;
