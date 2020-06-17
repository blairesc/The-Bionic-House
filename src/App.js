import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
        title: 'The Bionic House',
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
     <div>
       <Router>
        <Container className="p-0">
          <Navbar bg='transparent' expand='lg'>
            <Navbar.Brand href="#" bsPrefix="bionic-logo">
              The Bionic
              <span>
                <br/> 
                &nbsp; &nbsp; &nbsp; 
                House
              </span>
            </Navbar.Brand>
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

          {/*This says: when on a certain path render the component */}
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} content={this.state.home.content} /> }/>
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title}/>} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title}/>} />
        
      </Router>
      <Footer />
     </div>
    );
  }
}

export default App;
