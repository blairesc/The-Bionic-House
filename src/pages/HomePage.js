import React from 'react';
import Hero from '../components/Hero';
import ProjectTitle from '../components/ProjectTitle';
import ImageGrid from '../components/ImageGrid';


const HomePage = (props) => {
    const carterImages =
    [{
        id: 1, 
        src: './bionic_images/bionic_img3.jpeg', 
        bigSrc: './bionic_images/bionic_img3.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 2, 
        src: './bionic_images/bionic_img7.jpeg', 
        bigSrc: './bionic_images/bionic_img7.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 3, 
        src: './bionic_images/bionic_img8.jpeg', 
        bigSrc: './bionic_images/bionic_img8.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 4, 
        src: './bionic_images/bionic_img5.jpeg', 
        bigSrc: './bionic_images/bionic_img5.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 5, 
        src: './bionic_images/bionic_img6.jpeg', 
        bigSrc: './bionic_images/bionic_img6.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 6, 
        src: './bionic_images/bionic_img9.jpeg', 
        bigSrc: './bionic_images/bionic_img9.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 7, 
        src: './bionic_images/bionic_img10.jpeg', 
        bigSrc: './bionic_images/bionic_img10.jpeg',
        title: 'Caption of photo'
    }];

    const quietImages =
    [{
        id: 8, 
        src: './bionic_images/bionic_img1.jpeg', 
        bigSrc: './bionic_images/bionic_img1.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 9, 
        src: './bionic_images/bionic_img2.jpeg', 
        bigSrc: './bionic_images/bionic_img2.jpeg', 
        title: 'Caption of photo'
    },
    {
        id: 10, 
        src: './bionic_images/bionic_img11.jpeg', 
        bigSrc: './bionic_images/bionic_img11.jpeg', 
        title: 'Caption of photo'
    }];

    return(
        <div>
            <Hero />

            <ProjectTitle>
                Carter Project
            </ProjectTitle>
            <ImageGrid images={carterImages} />
            
            <ProjectTitle>
                Quiet House Project
            </ProjectTitle>
            <ImageGrid images={quietImages} />
            
        </div>
    );
}

export default HomePage;