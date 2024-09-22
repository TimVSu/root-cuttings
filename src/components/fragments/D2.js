import { useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks'
import { ImageOverlay } from 'react-leaflet/ImageOverlay';
import ContentBox from './../ContentBox';
import ImageCarousel from './../ImageCarousel';
import dtl from './../../data/D2/germany_overlay.png';
import img1 from './../../data/D2/photos/1.jpeg';
import img2 from './../../data/D2/photos/2.jpeg';
import img3 from './../../data/D2/photos/3.jpeg';
import img4 from './../../data/D2/photos/4.jpeg';
import img5 from './../../data/D2/photos/5.jpeg';
import img6 from './../../data/D2/photos/6.jpeg';
import img7 from './../../data/D2/photos/7.jpeg';
import img8 from './../../data/D2/photos/8.jpeg';
import './css/D2.css';

export default function D2({ feature, setFeatureFocus }) {

    const properties = feature.properties;
    const map = useMap();
    const nwBound = [38.585562030270566, 48.812176662525934];
    const seBound = [26.10270924957595, 60.06376547836262];
    const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];


    useEffect(() => {
        setTimeout(() => {
            map.flyToBounds([[nwBound[0], nwBound[1]-7], [seBound[0], seBound[1]-7]]);
        }, 4000);
    });

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <p 
                    style={{color: "var(--primary)", fontSize: "8pt", marginTop: "-10px"}}>
                    Auf der Karte ist der Saei-Park – Daryas Lieblingspark in der Nähe der ehemaligen Wohnung ihrer Familie – in Teheren markiert.<br/>
                    <br/>
                </p>
                <ImageCarousel 
                    images={IMAGES}/>
            </ContentBox>
            <ImageOverlay 
                url={dtl} 
                zIndex={900}
                bounds={[nwBound, seBound]}
                />
        </div>
  );
}
