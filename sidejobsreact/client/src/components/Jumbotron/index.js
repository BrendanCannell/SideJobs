import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './style.css';



function JumbotronComponent(props) {
    return (
        <Jumbotron fluid>
            <Container>
            <h1>{props.content}</h1>
            </Container>
        </Jumbotron>
    )
};
export default JumbotronComponent;
