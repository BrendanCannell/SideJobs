import React from "react";
import { Box, Text, Button } from "rebass";
// import {Input } from '@rebass/forms'
// import Footer from '../../components/Footer/index'
// import './style.css'
import { Input } from "@rebass/forms";
// import Footer from '../../components/Footer/index'
import "./style.css";

function NewPost(props) {
  return (
    <div>
      <h1>put form here</h1>
      <PostFirstName></PostFirstName>
      <PostLastName></PostLastName>
    </div>
  );
}

function PostFirstName(props) {
  return (
    <form>
      <h1>Create a New Job Post</h1>
      <p>Enter First Name:</p>
      <input type="text" />
    </form>
  );
}

function PostLastName(props) {
  return (
    <form>
      {/* <h1>Create a New Job Post</h1> */}
      <p>Enter Last Name:</p>
      <input type="text" />
    </form>
  );
}
function PostEmail(props) {
  return (
    <form>
      {/* <h1>Create a New Job Post</h1> */}
      <p>Enter Email:</p>
      <input type="text" />
    </form>
  );
}
function PostPhoneNumber(props) {
  return (
    <form>
      {/* <h1>Create a New Job Post</h1> */}
      <p>Enter Phone Number:</p>
      <input type="text" />
    </form>
  );
}
function PostZip(props) {
  return (
    <form>
      {/* <h1>Create a New Job Post</h1> */}
      <p>Enter Zipcode:</p>
      <input type="text" />
    </form>
  );
}

function PostService(props) {
  return (
    <form>
      <h1>Create a New Job Post</h1>
      <p>Enter First Name:</p>
      <input type="text" />
    </form>
  );
}
function PostDescription(props) {
  return (
    <form>
      <h1>Create a New Job Post</h1>
      <p>Enter First Name:</p>
      <input type="text" />
    </form>
  );
}
function PostCity(props) {
  return (
    <form>
      <h1>Create a New Job Post</h1>
      <p>Enter First Name:</p>
      <input type="text" />
    </form>
  );
}
export default NewPost;

// export default NewPost;
