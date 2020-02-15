import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function SignUpForm(props) {
    return (
        <div className='signUpContainer'>
            <Card>
                <Form style={{margin: '20px'}}>
                <Form.Row>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>

        </div>

    )
};
export default SignUpForm;