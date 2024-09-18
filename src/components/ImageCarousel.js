import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './css/ImageCarousel.css';

export default function ImageCarousel({images}) {


    return (
        <Carousel id="image-gallery" 
            indicators={false} 
            data-bs-theme="dark">
            {images.map(image => (
                <Carousel.Item 
                    key={image}>
                    <div 
                        className="d-flex justify-content-center">
                        <Image 
                            className="gallery-image border" 
                            src={image} 
                            rounded/>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
