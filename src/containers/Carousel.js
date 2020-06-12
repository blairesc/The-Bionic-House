import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import Cards from '../components/Cards';

class Carousel extends Component {
    render() {     
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2500
        };
        return (
            <Slider {...settings}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </Slider>
        );
    }
    
}

export default Carousel;