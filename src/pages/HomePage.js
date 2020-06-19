import React from 'react';

import Hero from '../components/Hero';
import Cards from '../components/Cards';

function HomePage(props) {
    return(
        <div>
            <Hero />
            <Cards/>
        </div>
    );
}

export default HomePage;