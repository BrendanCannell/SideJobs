import React, {Component} from "react";
import { Card, Text, Button } from 'rebass';
import { Input } from '@rebass/forms'
// import Footer from '../../components/Footer/index'
import './style.css';
import API from '../../utils/API';
import { BrowserRouter as Router  } from "react-router-dom";

class SignIn extends Component {
    state = {
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
      if (this.state.email && this.state.password) {
        API.findUser({
          email: this.state.email,
          password: this.state.password
        }).then(User => {
            Router.push(`userprofile/${User.id}`)
            // look at react router
        })
          .catch(err => console.log(err));
      }
    };

render () {
    return (
        <div>
            <div className='SignInContainer'>
                <div className='SignInCard'>
                    <Card>
                        <Text className='SignInText'>
                            Sign In
                        </Text>
                        <div>
                            <Input className='SignInInput'
                                style={{margin: '5px'}}
                                type='text'
                                placeholder='username or email'>
                            </Input>

                            <Input
                            className='SignInInput'
                             style={{margin: '5px'}}
                                type='text'
                                placeholder='password'>
                            </Input>
                            <Button className='SignInButton'>
                                Sign In
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )}
}

export default SignIn;

