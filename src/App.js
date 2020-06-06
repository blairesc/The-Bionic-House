import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    //State for the top level 
    this.state = { 
      title: 'The Bionic House',
      navLinks: [
        {title: 'Home', path: '/' },
        {title: 'About', path: '/about' },
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Bionic House',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      about: {
        title: 'About'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    } 
  }

  render() {
    return (
     <Router>
       <Container className="p-0" fluid={true}>
         <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>The Bionic House</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
         </Navbar>
       </Container>
      <Footer />
     </Router>
    );
  }
}

export default App;
