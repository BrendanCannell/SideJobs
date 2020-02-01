$(document).ready(function() {
    
    $.get("/UserProfile").then(function(data) {
      $(".member-name").text(data.email);
    });
  });
  