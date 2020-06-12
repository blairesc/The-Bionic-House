import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid">
            <Container>
                <Row>
                   <Col>
                        { props.title && <h1>{props.title}</h1> }
                   </Col>
                   <Col>
                        { props.content && <h6>{props.content}</h6>}
                        <button type="button" className="btn btn-info mt-2 float-right">Learn More</button>
                   </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;