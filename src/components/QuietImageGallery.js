import React from 'react';
import IosExpand from 'react-ionicons/lib/IosExpand';
import '../styles/QuietGallery.css';

const QuietImageGallery = ({ images }) => {
    return (
        <div className='contain'>
            <div className='quiet-image-gallery'>
                {images.map((image) =>
                    <a href={image.url} target="_blank" className={'quiet-img-' + image.id }>
                        <IosExpand fontSize="3rem" color="rgba(255,255,255, .6)" className="icon-expand"/>
                    </a>
                )}
            </div>
        </div>
    );
}

export default QuietImageGallery;