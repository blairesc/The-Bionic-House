import React from 'react';
import Hero from '../components/Hero';

import Gallery from 'react-grid-gallery';


const HomePage = (props) => {
    const containerImages =
    [{
        src: '/images/LivingContainers/container1.jpeg',
        thumbnail: '/images/LivingContainers/container1.jpeg',
        thumbnailWidth: 270,
        thumbnailHeight: 182,
        caption: 'Quiet House Project Rendition'
    },
    {
        src: '/images/LivingContainers/container2.jpeg',
        thumbnail: '/images/LivingContainers/container2.jpeg',
        thumbnailWidth: 290,
        thumbnailHeight: 182,
        caption: 'Quiet House Project Rendition'
    },
    {
        src: '/images/LivingContainers/container3.jpeg',
        thumbnail: '/images/LivingContainers/container3.jpeg',
        thumbnailWidth: 290,
        thumbnailHeight: 182,
        caption: 'Quiet House Project Rendition'
    },

    {
        src: '/images/LivingContainers/containerbed.jpeg',
        thumbnail: '/images/LivingContainers/containerbed.jpeg',
        thumbnailWidth: 350,
        thumbnailHeight: 212,
        caption: 'Quiet House Project Rendition'
    },
    {
        src: '/images/LivingContainers/containerbath.jpeg',
        thumbnail: '/images/LivingContainers/containerbath.jpeg',
        thumbnailWidth: 200,
        thumbnailHeight: 212,
        caption: 'Quiet House Project Rendition'
    },
    {
        src: '/images/LivingContainers/containerbath2.jpeg',
        thumbnail: '/images/LivingContainers/containerbath2.jpeg',
        thumbnailWidth: 200,
        thumbnailHeight: 212
    },
    {
        src: '/images/LivingContainers/containerkitchen1.jpeg',
        thumbnail: '/images/LivingContainers/containerkitchen1.jpeg',
        thumbnailWidth: 350,
        thumbnailHeight: 212
    },
    {
        src: '/images/LivingContainers/containerkitchen2.jpeg',
        thumbnail: '/images/LivingContainers/containerkitchen2.jpeg',
        thumbnailWidth: 300,
        thumbnailHeight: 212
    }];

    const carterImages = 
    [{
        src: '/images/Carter/EXTERIORENTRY.jpg',
        thumbnail: '/images/Carter/EXTERIORENTRY.jpg',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src: '/images/Carter/OUTDOORKITCHEN.jpg',
        thumbnail: '/images/Carter/OUTDOORKITCHEN.jpg',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src: '/images/Carter/CARTERKITCHEN.JPG',
        thumbnail: '/images/Carter/CARTERKITCHEN.JPG',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src: '/images/Carter/INFINITYEDGEPOOL.jpg',
        thumbnail: '/images/Carter/INFINITYEDGEPOOL.jpg',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src: '/images/Carter/bamboo.png',
        thumbnail: '/images/Carter/bamboo.png',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src: '/images/Carter/carter2.jpeg',
        thumbnail: '/images/Carter/carter2.jpeg',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src: '/images/Carter/EXTERIORWALLCLADDING.jpg',
        thumbnail:'/images/Carter/EXTERIORWALLCLADDING.jpg',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    },
    {
        src:  '/images/Carter/carter1.jpeg',
        thumbnail:  '/images/Carter/carter1.jpeg',
        thumbnailWidth: 420,
        thumbnailHeight: 312
    }];

    const quietImages =
    [{
        src: '/images/QuietHouse/quiethouse.jpeg',
        thumbnail: '/images/QuietHouse/quiethouse.jpeg',
        thumbnailWidth: 260,
        thumbnailHeight: 312,
        tags: [{value: "Rendition", title: "Rendition"}],
        caption: 'Quiet House Project Rendition'
    },
    {
        src: '/images/QuietHouse/quiethouse1.jpg',
        thumbnail: '/images/QuietHouse/quiethouse1.jpg',
        thumbnailWidth: 260,
        thumbnailHeight: 212
    },
    {
        src: '/images/QuietHouse/quiethouse2.jpeg',
        thumbnail: '/images/QuietHouse/quiethouse2.jpeg',
        thumbnailWidth: 260,
        thumbnailHeight: 212
    }];

    const galleryStyle = {
        display: "block",
        margin: "auto",
        minHeight: "3px",
        width: "100%",
        overflow: "auto"
    };

    return(
        <div>
            <Hero />

            <div id="project">
               <div style={galleryStyle}>
                    <h3 className='font-weight-bold'>Container Project</h3>
                    <Gallery images={containerImages} margin={8} rowHeight={273}/>
               </div>

                < br/>

               <div style={galleryStyle}>
                    <h3 className='font-weight-bold'>Carter Project</h3>
                    <Gallery images={carterImages} margin={7} rowHeight={273}/>
               </div>

               < br/>

               <div style={galleryStyle}>
                    <h3 className='font-weight-bold'>Quiet House Project</h3>
                    <Gallery images={quietImages} margin={6} rowHeight={300}/>
               </div>
            </div> 
        </div>
    );
}

export default HomePage;