import React from 'react';
// import { Text } from 'rebass';
import JumbotronComponent from '../Jumbotron';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import './style.css'

function UserProfileard(props) {
    const firstLast = `${props.firstName} ${props.lastName}`;

    return (
        <div>
            <JumbotronComponent
                content="User Profile">
            </JumbotronComponent>

            <div className='pageContentContainer'>
                <div className='userInfo'>
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Body >
                            <Card.Title>{firstLast}</Card.Title>
                            <Card.Text>{props.city} {props.state}, {props.zipCode}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem style={{ padding: '0px 20px 0px 20px' }}>
                                <h5>
                                    Contact Info:
                                </h5>
                            </ListGroupItem>
                            <ListGroupItem style={{ padding: '0px 20px 0px 20px' }}>Email: {props.email}</ListGroupItem>
                            <ListGroupItem style={{ padding: '0 20px 20px 20px' }}>Phone Number: {props.phoneNumber} </ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Edit Info</Card.Link>
                            <Card.Link href="#">Change Pasword</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className='userPostContainer'>
                    <Card style={{margin: '0px 0px 10px 0px' }}>
                        <Card.Body>
                        <Card.Title>Service Service Service</Card.Title>
                            <div className='CardBody'>
                            <div className='cityPriceContainer'>
                                <p>City, Zipcode</p>
                                <p>$40</p>
                            </div>
                            <p>Description Description Description Description Description</p>
                            <div className='overviewContainer'>
                                <p>Date posted </p>
                                <p>Contact: </p>
                                <p>First Last</p>
                                <p>919-333-4444</p>
                            </div>
                            <Button variant="primary">Edit Posting</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body >
                        <Card.Title>Service Service Service</Card.Title>
                            <div className='CardBody'>
                            <div className='cityPriceContainer'>
                                <p>City, Zipcode</p>
                                <p>$40</p>
                            </div>
                            <p>Description Description Description Description Description</p>
                            <div className='overviewContainer'>
                                <p>Date posted </p>
                                <p>Contact: </p>
                                <p>First Last</p>
                                <p>919-333-4444</p>
                            </div>
                            <Button variant="primary">Edit Posting</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    )
};

export default UserProfileard;

