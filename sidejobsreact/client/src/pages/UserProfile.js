import React from "react";

$(document).ready(function() {
    
    $.get("/UserProfile").then(function(data) {
      $(".member-name").text(data.email);
    });
  });

function UserProfile() {
  return(
      <div>
          <h1>UserProfile</h1>
      </div>
  )
}

export default UserProfile;
  
