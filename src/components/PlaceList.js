import { useState } from 'react';
import { useMap } from 'react-leaflet/hooks'
import { Stack, Button } from 'react-bootstrap';
import { MapCenter } from './App';
import places from './../data/places.json';
import './css/PlaceList.css';

export default function PlaceList() {

    const [zoomed, setZoomed] = useState(false);
    const map = useMap();

    function handleClick(e) {
        const placeName = e.target.id;
        for (const feature of places.features) {
            if (feature.properties.name === placeName) {
                map.flyTo(feature.geometry.coordinates, 11);
            }
        }
        if (placeName) {
            setZoomed(true);
        }
    }

    function handleZoomOut() {
        map.flyTo(MapCenter, 4.5);
        setZoomed(false);
    }

    return (
        <Stack
            id='place-stack'
            gap={3}>
            {places.features.map(place => (
                <Button
                    className='place-button'
                    key={place.properties.name}
                    onClick={handleClick}>
                    <i
                        className='bi bi-geo-alt-fill' />
                    <span 
                        id={place.properties.name}> {place.properties.name}</span>
                </Button>
            ))}
            {zoomed ?
                <Button
                    className='place-button'
                    onClick={handleZoomOut}>
                    Alle Orte anzeigen
                </Button>
                : null}
        </Stack>
    );
}
