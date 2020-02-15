import React, {Component} from "react";
import { Card, Text, Button } from 'rebass';
import { Input } from '@rebass/forms'
// import Footer from '../../components/Footer/index'
import './style.css';
import API from '../../utils/API';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignUpForm from '../../components/signUpForm'



class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
    
  
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(User => {
        console.log(User)
        Router.push(`userprofile/${User.id}`)
        // look at react router
      })
        .catch(err => console.log(err));
    }
  };



  render () {
    return(
    <div>
        {/* <SignUpForm>
          </SignUpForm> */}
      
      <div className='SignUpContainer'>
        <div className='SignUpCard'>
          <Card>
            <Text className='SignUpText'>
              Sign Up
            </Text>
            <div>
              <Text>
                First Name
              </Text>
              <Input
              name="firstName"
                style={{ marginTop: '5px' }}
                value= {this.state.firstName}
                type='text'
                onChange={this.handleInputChange}>
              </Input>
              <Text>
                Last Name
              </Text>
              <Input
              name='lastName'
                style={{ marginTop: '5px' }}
                value= {this.state.lastName}
                onChange={this.handleInputChange}
                type='text'>
              </Input>
              <Text>
                Email
              </Text>
              <Input
              name='email'
                style={{ marginTop: '5px' }}
                type='text'
                value={this.state.email}
                onChange={this.handleInputChange}>
              </Input>
              <Text>
                Password
              </Text>
              <Input
              name='password'
                style={{ marginTop: '5px', marginBottom: '5px' }}
                value={this.state.password}
                onChange={this.handleInputChange}
                type='text'>
              </Input>
              <Button className='SignUpButton' onClick={this.handleFormSubmit}>
                Sign Up
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    )}
  };


export default SignUp;
