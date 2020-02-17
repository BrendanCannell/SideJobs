import React, { Component } from "react";
// import { Button } from "rebass";
import "./style.css";
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
// import { Input } from "@rebass/forms";


class NewPost extends Component {

  state = {
    firstName: '',
    lastName: '',
    service: '',
    description: '',
    phoneNumber: '',
    email: '',
    zipCode: '',
    city: '',
    costPerHour: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.firstName)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveJob({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        service: this.state.service, 
        description: this.state.description, 
        phoneNumber: this.state.phoneNumber, 
        email: this.state.email, 
        zipCode: this.state.zipCode, 
        city: this.state.city,
        costPerHour: this.state.costPerHour
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  };


render() {
  return (
    <div>
      <Form style={{ width: '75%', marginLeft: '20px' }}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label> First Name</Form.Label>
              <Form.Control type='text' name='firstName' value={this.state.firstName} onChange={this.handleInputChange} placeholder="First name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> Last Name</Form.Label>
              <Form.Control type='text' name='lastName' value={this.state.lastName} onChange={this.handleInputChange} placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Email</Form.Label>
              <Form.Control type='text' name='email' value={this.state.email} onChange={this.handleInputChange}  placeholder="Email"/>
            </Col>
            <Col>
            <Form.Label>Phone Number</Form.Label>
              <Form.Control type='text' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleInputChange} placeholder="Phone Number"/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type='text' name='city' value={this.state.city} onChange={this.handleInputChange} placeholder="City"/>
            </Form.Group>
            </Col> 
           <Col>
            <Form.Group>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control type='text' name='zipCode' value={this.state.zipCode} onChange={this.handleInputChange} placeholder="Zipcode"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
              <Form.Label>Price Per Hour</Form.Label>
              <Form.Control type='text' name='costPerHour' value={this.state.costPerHour} onChange={this.handleInputChange} placeholder="$$$"/>
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group>
              <Form.Label>Service</Form.Label>
              <Form.Control type='text' name='service' value={this.state.service} onChange={this.handleInputChange} placeholder="Service"/>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type='text' name='description' value={this.state.description} onChange={this.handleInputChange} placeholder="Description"/>
            </Form.Group>
            </Col>
        </Row>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Form>
    </div>
  )
}
};

export default NewPost;
// function handleServiceInput(e) {
//   this.setState({ firstNameInput: e.target.value });
//   this.setState({ lastNameInput: e.target.value });
//   this.setState({ serviceInput: e.target.value });
//   this.setState({ descriptionInput: e.target.value });
//   this.setState({ phoneNumberInput: e.target.value });
//   this.setState({ emailInput: e.target.value });
//   this.setState({ zipCodeInput: e.target.value });
//   this.setState({ cityInput: e.target.value });

// //   handleClearing();
//   handleTerminalOutputs();
// }

// function handleClearing(e) {
//   this.refs.firstNameInput.value = "";
// //   this.lastNameInput.value = "";
// //   this.serviceInput.value = "";
// //   this.descriptionInput.value = "";
// //   this.phoneNumberInput.value = "";
// //   this.emailInput.value = "";
// //   this.zipCodeInput.value = "";
// //   this.cityInput.value = "";
// }

// function handleTerminalOutputs() {
//     console.log("First Name is: " + this.state.firstNameInput);
//     console.log("Last Name is: " + this.state.lastNameInput);
//     console.log("Service is: " + this.state.serviceInput);
//     console.log("Description is: " + this.state.descriptionInput);
//     console.log("Phone Number is: " + this.state.phoneNumberInput);
//     console.log("Email is: " + this.state.emailInput);
//     console.log("Zip Code is: " + this.state.zipCodeInput);
//     console.log("Cost Per Hour is: " + this.state.costPerHourInput);
//     console.log("City is: " + this.state.cityInput);
//   }




// function NewPost(props) {
//   return (
//     <div>
//       <form>
//         <label id="firstNameInput" htmlFor="firstNameInput">
//           First Name:
//         </label>
//         <input name="firstNameInput" type="text" placeholder=""></input>
//         <label id="lastNameInput" htmlFor="lastNameInput">
//           Last Name:
//         </label>
//         <input name="lastNameInput" type="text" placeholder=""></input>
//         <label id="serviceInput" htmlFor="serviceInput">
//           Service:
//         </label>
//         <input name="serviceInput" type="text" placeholder=""></input>
//         <label id="descriptionInput" htmlFor="descriptionInput">
//           Description:
//         </label>
//         <input name="descriptionInput" type="text" placeholder=""></input>

//         <label id="phoneNumberInput" htmlFor="phoneNumberInput">
//           Phone Number:
//         </label>
//         <input name="phoneNumberInput" type="text" placeholder=""></input>

//         <label id="emailInput" type="text">
//           Email:
//         </label>
//         <input name="emailInput" type="text" placeholder=""></input>

//         <label id="zipCodeInput" htmlFor="zipCodeInput">
//           Zipcode:
//         </label>
//         <input name="zipCodeInput" type="text" placeholder=""></input>
//         <label id="costPerHourInput" htmlFor="costPerHourInput">
//           Cost Per Hour:
//         </label>
//         <input name="costPerHourInput" type="text" placeholder=""></input>
//         <label id="cityInput" htmlFor="cityInput">
//           City:
//         </label>
//         <input name="cityInput" type="text" placeholder=""></input>
//         {/* When I return each piece, since I don't want to wrap them in a form element, I could return a fragment */}
//       </form>
//       <Button onClick={handleServiceInput} variant="primary">
//         Enter
//       </Button>
//       <Button onClick={handleClearing} variant="primary">
//         Clear All
//       </Button>
//       <Button variant="primary">
//         Extra Button
//       </Button>
//     </div>
//   );
// }

// export default NewPost;
