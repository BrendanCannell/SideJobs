import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Link,
    Image,
    Card,
} from 'rebass';
import { ThemeProvider } from 'emotion-theming'

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

  }
  export default SignUp;
