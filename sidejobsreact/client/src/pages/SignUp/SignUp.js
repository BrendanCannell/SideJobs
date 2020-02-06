import React from "react";
import { Card, Text, Button } from 'rebass';
import { Input } from '@rebass/forms'
// import Footer from '../../components/Footer/index'
import './style.css'
// $(document).ready(function() {
//     // var signUpForm = $("form.signup");
//     // var emailInput = $("input#email-input");
//     // var passwordInput = $("input#password-input");
//   // 

//     signUpForm.on("submit", function(event) {
//       event.preventDefault();
//       var userData = {
//         email: emailInput.val().trim(),
//         password: passwordInput.val().trim()
//       };

//       if (!userData.email || !userData.password) {
//         return;
//       }
//       signUpUser(userData.email, userData.password);
//       emailInput.val("");
//       passwordInput.val("");
//     });

//     function signUpUser(email, password) {
//       $.post("/SignUp", {
//         email: email,
//         password: password
//       })
//         .then(function(data) {
//           window.location.replace("/Landing");
//         })
//         .catch(handleLoginErr);
//     }

//     function handleLoginErr(err) {
//       $("#alert .msg").text(err.responseJSON);
//       $("#alert").fadeIn(500);
//     }
//   });

function SignUp(props) {
  return (
    <div>
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
                style={{ marginTop: '5px' }}
                type='text'
                placeholder='John'>
              </Input>
              <Text>
                Last Name
              </Text>
              <Input
                style={{ marginTop: '5px' }}
                type='text'
                placeholder='Smith'>
              </Input>
              <Text>
                Email
              </Text>
              <Input
                style={{ marginTop: '5px' }}
                type='text'
                placeholder='johnSmith@email.com'>
              </Input>
              <Text>
                Password
              </Text>
              <Input
                style={{ marginTop: '5px', marginBottom: '5px' }}
                type='text'>
              </Input>
              <Button className='SignUpButton'>
                Sign Up
                      </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default SignUp;
