import React from "react";
// import { Box, Text, Button } from "rebass";
import './style.css'
// import { Input } from "@rebass/forms";
import "./style.css";

function NewPost(props) {
  return (
    <div>
        <form>
      <label htmlFor='firstNameInput'>First Name:</label>
      <input name='firstNameInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='lastNameInput'>Last Name:</label>
      <input name='lastNameInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='serviceInput'>Service:</label>
      <input name='serviceInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='descriptionInput'>Description:</label>
      <input name='descriptionInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='phoneNumberInput'>Phone Number:</label>
      <input name='phoneNumberInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='emailInput'>Email:</label>
      <input name='emailInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='zipCodeInput'>Zipcode:</label>
      <input name='zipCodeInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='costPerHourInput'>Cost Per Hour:</label>
      <input name='costPerHourInput' type='text' placeholder=""></input>
      {};
      <label htmlFor='cityInput'>City:</label>
      <input name='cityInput' type='text' placeholder=""></input>
{/* When I return each piece, since I don't want to wrap them in a form element, I could return a fragment */}
      </form>
    </div>
  );
}

export default NewPost;

