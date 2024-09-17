import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from './../data/D1/photos/1_mother.png';
import img2 from './../data/D1/photos/2_birthday_2_copy.png';
import img3 from './../data/D1/photos/3_ball_game.png';
import img4 from './../data/D1/photos/4_grandparents.png';
import img5 from './../data/D1/photos/5_dance.png';
import img6 from './../data/D1/photos/6_picknick.png';
import img7 from './../data/D1/photos/7_teenagers.png';
import img8 from './../data/D1/photos/8_older.png';
import './css/ImageCarousel.css';

export default function ImageCarousel() {

    const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <Carousel id="image-gallery" 
            indicators={false} 
            data-bs-theme="dark" 
            slide={false}>
            {IMAGES.map(image => (
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
