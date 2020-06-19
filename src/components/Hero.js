import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid" style={{padding:'35px 0px'}}>
            <Container>
                <Row style={{marginLeft:'6px'}}>
                  <h2 style={{lineHeight:'1.6'}}>  
                      <div>
                          <span>We create a well designed,</span>
                      </div>
                      <div>
                        <span>and highly functional live workspace.</span>
                      </div>
                      <Button href="#"variant="outline-primary">More about us</Button>
                  </h2>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;