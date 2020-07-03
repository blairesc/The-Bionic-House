import React from 'react';
import '../styles/ContactPage.css';

import LocationIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

function ContactPage(props) {
    return(
        <div className='section'>
            <div className='contact'>
                <div className='contact-info'>
                   <div>
                        <h2>Contact Info</h2>
                        <ul className='info'>
                            <li>
                                <LocationIcon />
                                1982 Lynch Street
                                Fort Lauderdale Fl 53202
                            </li>
                            <li>
                                <MailOutlineIcon />
                                bionichouse@hotmail.com
                            </li>
                            <li>
                                <PhoneIcon /> 
                                920-913-3505
                            </li>
                        </ul>
                   </div>
                    <ul className='socials'>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank">
                                <LinkedInIcon aria-label="Linkedin" fontSize='large' />
                            </a>
                        </li>
                        <li>
                            <a href="https:/www.facebook.com" target="_blank">
                                <FacebookIcon aria-label="Facebook" fontSize='large' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='contact-form'>
                    <h2>Let's Talk</h2>
                    <div className='form'>
                        <div className='inputBox w50'>
                            <input type='text' name='' required/>
                                <span>First Name</span>
                        </div>
                        <div className='inputBox w50'>
                            <input type='text' name='' required/>
                                <span>Last Name</span>
                        </div>
                        <div className='inputBox w50'>
                            <input type='email' name='' required/>
                                <span>Email Address</span>
                        </div>
                        <div className='inputBox w50'>
                            <input type='email' name='' required/>
                                <span>Mobile Number</span>
                        </div>
                        <div className='inputBox w100'>
                            <textarea name='' required></textarea>
                                <span>Write your message here...</span>
                        </div>
                        <div className='inputBox w100'>
                            <input type='submit' value='Send'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;