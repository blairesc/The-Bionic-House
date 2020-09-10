import React from 'react';

import { Row, Col } from 'react-bootstrap';
import '../styles/AboutPage.css';

function AboutPage(props) {
    return(
       <Row className="no-gutters">
           <Col md={6}>
                <div className="left d-flex justify-content-center align-items-center">
                    <div className="image-box">
                        <div className="border-box"></div>
                        <div className="about-image">
                            <img src="/images/QuietHouse/quiethouse1.jpg" alt="Bionic About" className="bionic-image"/>
                        </div>
                    </div>
                </div>
           </Col>
           <Col md={6}>
                <div className="right">
                    <h2>About Us</h2>
                    <div className="line"></div>
                    <p>
                        Powerful impressions are lasting impressions. They help to define us - who we are,
                        how we see ourselves within the larger society. Their indelibly imprint is with the 
                        patterns that shape what we ultimately become. They are the subtext of our personal 
                        narratives, our stories, which when shared, provide the irrefutable confirmation of
                        our kinship and shared humanity, and the blessed assurance that we are not alone.
                    </p>

                    <p>
                        The Bionic House is a design practice of our shared but varied human experience, 
                        a practice designed for the sole purpose of enriching people’s lives. It’s a refuge 
                        for folk who seek inspiration through the work and experiences of others. 
                        The Bionic House want to give the world their gift of the experiences that have 
                        imprinted them, and find inspiration through the imprint of others.
                    </p>

                    <h2>Our Mission </h2>
                    <div className="line"></div>
                    <p>
                        Established in 2016, the firm believes that a well-designed, highly functional live 
                        workspace that’s not only inspiring, but can boost creativity and create breathing space 
                        for everyone.
                        "Believe it our not I care.”
                    </p>
                </div>
           </Col>
       </Row>
    );
}

export default AboutPage;