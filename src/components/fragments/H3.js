import { useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';
import { Image } from 'react-bootstrap';
import ContentBox from './../ContentBox';
import image from './../../data/H3/working.png';
import './css/H3.css';

export default function H3({ feature, setFeatureFocus }) {

    const map = useMap();
    const coords = feature.geometry.coordinates;
    const modifiedCoords = [coords[0] - 0.023, coords[1]];

    useEffect(() => {
        let interval1, interval2, interval3;
        setTimeout(() => {
            interval1 = setInterval(() => {
                map.setView([modifiedCoords[1] - 0.0013, modifiedCoords[0] + 0.0011]);
            }, 90);
            interval2 = setInterval(() => {
                map.setView([modifiedCoords[1] - 0.00099, modifiedCoords[0] - 0.001]);
            }, 75);
            interval3 = setInterval(() => {
                map.setView([modifiedCoords[1] + 0.00089, modifiedCoords[0] + 0.001]);
            }, 80);
        }, 4000);
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    });


    return (
        <div>
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <p
                    style={{ color: 'var(--primary)', fontSize: '8pt', marginTop: '-10px' }}>
                    Auf der Karte ist das Dorf Aghuzlu markiert, aus dem Hadis Eltern stammen.<br />
                    <br />
                </p>
                <div 
                    className='d-flex justify-content-center'>
                    <Image
                        id='h3-image'
                        src={image}
                        rounded />
                </div>
            </ContentBox>
        </div>
    );
}
