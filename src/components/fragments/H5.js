import { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import ContentBox from './../ContentBox';
import natureSound from './../../data/H5/nature.mp3';
import image from './../../data/H5/gilan_house.JPG';
import './css/H5.css';

export default function H5({ feature, setFeatureFocus }) {

    const soundAttribution = '100% Nature (Brook Sounds and Birds).mp3 by Sonoquilibrium – https://freesound.org/s/514750/ – License: Attribution NonCommercial 3.0';
    const imageAttribution = 'Irangilaneh, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons';

    useEffect(() => {
        const rainAudio = new Audio(natureSound);
        rainAudio.play();
        rainAudio.loop = true;
        return () => rainAudio.pause();
    });

    return (
        <div>
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <p
                    style={{ color: 'var(--primary)', fontSize: '8pt', marginTop: '-10px' }}>
                    Auf der Karte ist der Ort markiert, wo Hadis Haus in Gilan stehen könnte.<br />
                </p>
                <div
                    className='d-flex justify-content-center'>
                    <Image
                        id='h5-image'
                        src={image}
                        rounded />
                </div>
                <p
                    id='attribution'>
                    Foto: {imageAttribution}<br />
                    Audio: {soundAttribution}
                </p>
            </ContentBox>
        </div>
    );
}
