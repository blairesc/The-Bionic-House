import React from 'react';
import Hero from '../components/Hero';
import ProjectTitle from '../components/ProjectTitle';
import ContainerImageGallery from '../components/ContainerImageGallery';
import CarterImageGallery from '../components/CarterImageGallery';
import QuietImageGallery from '../components/QuietImageGallery';


const HomePage = (props) => {
    const containerImages =
    [{
        id: 1, 
        url: '/images/LivingContainers/container1.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 2, 
        url:'/images/LivingContainers/container2.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 3, 
        url: '/images/LivingContainers/container3.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 4, 
        url:'/images/LivingContainers/containerbath.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 5, 
        url: '/images/LivingContainers/containerbath2.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 6, 
        url: '/images/LivingContainers/containerbed.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 7, 
        url:'/images/LivingContainers/containerkitchen1.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 8, 
        url:'/images/LivingContainers/containerkitchen2.jpeg', 
        title: 'Caption of photo'
    }];

    const carterImages = 
    [{
        id: 1, 
        url: '/images/Carter/EXTERIORENTRY.jpg', 
        title: 'Caption of photo'
    },
    {
        id: 2, 
        url:'/images/Carter/CARTERKITCHEN.JPG', 
        title: 'Caption of photo'
    },
    {
        id: 3, 
        url: '/images/Carter/OUTDOORKITCHEN.jpg', 
        title: 'Caption of photo'
    },
    {
        id: 4, 
        url:'/images/Carter/INFINITYEDGEPOOL.jpg', 
        title: 'Caption of photo'
    },
    {
        id: 5, 
        url: '/images/Carter/EXTERIORWALLCLADDING.jpg', 
        title: 'Caption of photo'
    },
    {
        id: 6, 
        url: '/images/Carter/bamboo.png', 
        title: 'Caption of photo'
    },
    {
        id: 7, 
        url: '/images/Carter/carter2.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 8, 
        url: '/images/Carter/carter1.jpeg', 
        title: 'Caption of photo'
    }];

    const quietImages =
    [{
        id: 1, 
        url: '/images/QuietHouse/quiethouse.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 2, 
        url:'/images/QuietHouse/quiethouse1.jpg', 
        title: 'Caption of photo'
    },
    {
        id: 3, 
        url: '/images/QuietHouse/quiethouse2.jpeg', 
        title: 'Caption of photo'
    }];

    return(
        <div>
            <Hero />

            <div className="project">
                <ProjectTitle>
                    Container Project
                </ProjectTitle>
                <ContainerImageGallery images={containerImages}/>
                <br /><br />  

                <ProjectTitle>
                    Carter Project
                </ProjectTitle>
                <div className='container'>
                    <CarterImageGallery images={carterImages} />
                </div>
                <br /><br /> 

                <ProjectTitle>
                    Quiet House Project
                </ProjectTitle>
                <QuietImageGallery images={quietImages}/>
                <br /><br /> 
            </div> 
        </div>
    );
}

export default HomePage;