import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../containers/Carousel';

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} content={props.content}/>
            <Carousel />
        </div>
    );
}

export default HomePage;