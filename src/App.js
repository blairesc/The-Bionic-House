import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [title, setTitle] = useState('The Bionic House');
  const [navLinks, setNavLinks] = useState(
    [
      {title: 'Home', path: '/' },
      {title: 'About', path: '/about' },
      {title: 'Contact', path: '/contact' }
    ]
  );
  const [home, setHome] = useState('The Bionic House');
  const [about, setAbout] = useState('About');
  const [contact, setContact] = useState('Let\'s Talk');


  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <div>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar bg='transparent' expand='lg' className="mb-3">
            <Navbar.Brand href="#" bsPrefix="">
              The Bionic House
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home  &nbsp; </Link>
                <Link className='nav-link' to='/about'>About Us  &nbsp; </Link>
                <Link className='nav-link' to='/contact'>Let's Talk  &nbsp; </Link> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        {/*This says: when on a certain path render the component */}
        <Route path='/' exact render={() => <HomePage title={home.title} /> }/>
        <Route path='/about' exact render={() => <AboutPage title={about.title}/>} />
        <Route path='/contact' exact render={() => <ContactPage title={contact.title}/>} />  
      </Router>

    </div>
  );
}

export default App;
