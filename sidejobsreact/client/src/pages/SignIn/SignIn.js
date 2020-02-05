import React from "react";
import { Card, Text, Button } from 'rebass';
import { Label, Input } from '@rebass/forms'
import NavBar from '../../components/NavBar/index'
import Footer from '../../components/Footer/index'
import './style.css'


// $(document).ready(function() {
//     // var loginForm = $("form.login");
//     // var emailInput = $("input#email-input");
//     // var passwordInput = $("input#password-input");

//     loginForm.on("submit", function(event) {
//       event.preventDefault();
//       var userData = {
//         email: emailInput.val().trim(),
//         password: passwordInput.val().trim()
//       };

//       if (!userData.email || !userData.password) {
//         return;
//       }

//       loginUser(userData.email, userData.password);
//       emailInput.val("");
//       passwordInput.val("");
//     });

//     function loginUser(email, password) {
//       $.post("/SignIn", {
//         email: email,
//         password: password
//       })
//         .then(function() {
//           window.location.replace("/Landing");

//         })
//         .catch(function(err) {
//           console.log(err);
//         });
//     }
//   });

function SignIn(props) {
    return (
        <div>
            <NavBar />
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
    )
}

export default SignIn;

