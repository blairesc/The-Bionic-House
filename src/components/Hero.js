import React from 'react';
import  { Jumbotron, Container, Row, Button } from 'react-bootstrap';

import '../styles/Hero.css';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent">
            <h1 className="text-center display-1 font-weight-bold b-color">The Bionic House</h1>
            <p className="text-center h2 l-height">
                Creating a well designed, <br/>
                and highly functional live workspace.
            </p>
            <p className="text-center">
                <Button href="#" variant="outline-primary" className="mt-2">Explore</Button>
            </p>
        </Jumbotron>
    );
}

export default Hero;