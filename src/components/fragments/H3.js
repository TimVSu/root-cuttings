import { useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';
import ContentBox from './../ContentBox';

export default function H3({feature, setFeatureFocus}) {

    const map = useMap();
    const properties = feature.properties;
    const coords = feature.geometry.coordinates;
    const modifiedCoords = [coords[0]-0.023, coords[1]]

    useEffect(() => {
        let interval1, interval2, interval3;

        setTimeout(()=> {
            interval1 = setInterval(() => {
                map.setView([modifiedCoords[1]-0.0013, modifiedCoords[0]+0.0011]);
            }, 90);
            interval2 = setInterval(() => {
                map.setView([modifiedCoords[1]-0.00099, modifiedCoords[0]-0.001]);
            }, 75);
            interval3 = setInterval(() => {
                map.setView([modifiedCoords[1]+0.00089, modifiedCoords[0]+0.001]);
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
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} />
        </div>
  );
}
