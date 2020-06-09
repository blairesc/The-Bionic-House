import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    return(
        <Jumbotron>
            <Container>
                <Row>
                   <Col>
                        { props.title && <h2>{props.title}</h2> }
                   </Col>
                   <Col>
                        { props.content && <h6>{props.content}</h6>}
                   </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero; 