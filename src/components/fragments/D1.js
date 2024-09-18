import { useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks'
import ImageCarousel from '../ImageCarousel';
import ContentBox from './../ContentBox';
import img1 from './../../data/D1/photos/1_mother.png';
import img2 from './../../data/D1/photos/2_birthday_2_copy.png';
import img3 from './../../data/D1/photos/3_ball_game.png';
import img4 from './../../data/D1/photos/4_grandparents.png';
import img5 from './../../data/D1/photos/5_dance.png';
import img6 from './../../data/D1/photos/6_picknick.png';
import img7 from './../../data/D1/photos/7_teenagers.png';
import img8 from './../../data/D1/photos/8_older.png';

export default function D1({feature, setFeatureFocus}) {

    const properties = feature ? feature.properties : null;
    const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];
    const map = useMap()

    useEffect(() => {
        map.panTo([35.73407393552157, 51.401564933532534], {animate: true, duration: 120, easeLinearity: 1});
/*         setTimeout(() => { 
            map.zoomIn(12, {animate: true})
        }, 10000); */
    }, [feature]);


    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} >
                <ImageCarousel images={IMAGES}/>
            </ContentBox>
        </div>
  );
}
