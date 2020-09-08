import React from 'react';
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";


const ImageGrid = ({ images }) => {
    return (
           <PhotoGrid columns={4} photos={images} />
    );

}

export default ImageGrid;