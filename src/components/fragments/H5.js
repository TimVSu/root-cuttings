import { useEffect } from 'react';
import ContentBox from './../ContentBox';
import Image from 'react-bootstrap/Image';
import natureSound from './../../data/H5/nature.mp3';
import './css/H5.css';

export default function H5({feature, setFeatureFocus}) {

    const properties = feature.properties;
    const soundAttribution = "100% Nature (Brook Sounds and Birds).mp3 by Sonoquilibrium – https://freesound.org/s/514750/ – License: Attribution NonCommercial 3.0";
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/dd/%D8%AE%D8%A7%D9%86%D9%87_%D9%87%D8%A7%DB%8C_%D8%B1%D9%88%D8%B3%D8%AA%D8%A7%DB%8C%DB%8C.JPG";
    const imageAttribution = "Irangilaneh, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
    
    useEffect(() => {
        const rainAudio = new Audio(natureSound)
        rainAudio.play()
        return () => rainAudio.pause()
    })
    
    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <div className="d-flex justify-content-center">
                    <Image 
                        id='h5-image' 
                        src={imageUrl}
                        rounded/>
                </div>
                <p 
                    id="attribution">
                    Foto: {imageAttribution}<br/>
                    Audio: {soundAttribution}
                </p>
            </ContentBox>
        </div>
  );
}
