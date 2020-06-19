import React from 'react';

import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import '../styles/AboutPage.css';

function AboutPage(props) {
    return(
       <div>
            <div className="header">
                <ContentSection>
                    About Us
                </ContentSection>
            </div>
            <div className='content to-left'>
                <ContentSection>
                    Powerful impressions are lasting impressions. They help to define us - who we are, how we see ourselves within the larger society. Their indelibly imprint is with the patterns that shape what we ultimately become. They are the subtext of our personal narratives, our stories, which when shared, provide the irrefutable confirmation of our kinship and shared humanity, and the blessed assurance that we are not alone.
                </ContentSection>
            </div>
            <br/>
            <div className='content to-right'>
                <ContentSection>
                    The Bionic House is a design practice of our shared but varied human experience, a practice designed for the sole purpose of enriching people’s lives. It’s a refuge for folk who seek inspiration through the work and experiences of others. The Bionic House want to give the world their gift of the experiences that have imprinted them, and find inspiration through the imprint of others.
                </ContentSection>
            </div>
            <br/>
            <div className='content to-left'>
                <ContentSection>
                    Established in 2016, the firm believes that a well-designed, highly functional  live workspace that’s not only inspiring, can boost creativity and create breathing space for everyone.
                    Believe it our not I care.”
                </ContentSection>
            </div>  
       </div>
    );
}

export default AboutPage;