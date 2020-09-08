import React from 'react';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import '../styles/ContactPage.css';


function ContactPage() {
    return(
        <div>
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <Card className="shadow">
                            <Card.Body>
                                <Row className="pb-2">
                                    <Col lg={12}>
                                        <div className="text-center text-white py-3 head">
                                            <h2> Contact Us </h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="pt-4">
                                    <Col lg={5} md={6}>
                                        <Row className="px-3">
                                            <Col lg={2}>
                                                <PhoneInTalkIcon color="action" style={{ fontSize: 27 }} />
                                            </Col>
                                            <Col lg={10}>
                                                <h6 className="font-weight-bold pt-2">Give Us A Ring</h6>
                                            </Col> 
                                            <Col lg= {{ size: 4, offset: 1}} >
                                                <p>
                                                    Gary Architect <br />
                                                    (954) 456-9827 <br />
                                                    Mon-Fri, 8:00 - 5:00
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    
                                    <Col md={6} lg={{ size: 6, offset: 1}}>
                                        <Row className="px-3">
                                            <Col lg={2}>
                                                <LocationOnIcon color="action" style={{ fontSize: 27 }} />
                                            </Col>
                                            <Col lg={10}>
                                                <h6 className="font-weight-bold pt-2">Find Us In Office</h6>
                                            </Col>
                                            <Col lg={{ size: 5, offset: 1}} className="pl-4">
                                                <p>
                                                    2965 Illinois Avenue, <br />
                                                    Boca Raton Fl 33013, <br />
                                                    USA
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Form className="p-3">
                                    <Row className="my-5">
                                        <Col lg={6}>
                                            <Form.Control bsPrefix="effect-1" type="text" placeholder="Full Name"/>
                                            <span className="focus-border"></span>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Control bsPrefix="effect-1" type="email" placeholder="Your Email"/>
                                            <span className="focus-border"></span>
                                        </Col>
                                    </Row>

                                    <Row className="pt-3">
                                        <Col lg={12}>
                                            <Form.Control bsPrefix="effect-1" type="text" placeholder="Your Message"/>
                                            <span className="focus-border"></span>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6} className="mt-3">
                                            <Button variant="primary" type="submit" bsPrefix="btn-1">
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactPage;