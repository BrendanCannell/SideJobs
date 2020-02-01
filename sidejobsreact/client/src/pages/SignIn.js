import React from "react";

$(document).ready(function() {
    // var loginForm = $("form.login");
    // var emailInput = $("input#email-input");
    // var passwordInput = $("input#password-input");
  
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function loginUser(email, password) {
      $.post("/SignIn", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/Landing");
          
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });

function SignIn() {
    return(
        <div>
            <h1>SignIn</h1>
        </div>
    )
}

export default SignIn;
  
