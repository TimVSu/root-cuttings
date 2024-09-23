import { useState } from 'react';
import { useMap } from 'react-leaflet/hooks'
import { Stack, Button } from 'react-bootstrap';
import { mapCenter, mapZoom } from './App';
import places from './../data/places.json';
import './css/PlaceList.css';

/**
 * Component displaying buttons for zooming into and out of key areas on the map
 * 
 * @returns {React.JSX.Element}
 */
export default function PlaceList() {

    /**
     * State storing a boolean value indicating whether the map is zoomed on a key area, used for conditionally displaying the "show all areas" button
     */
    const [zoomed, setZoomed] = useState(false);
    /**
     * The Leaflet map object
     */
    const map = useMap();

    /**
     * Function that zooms into the corresponding area and registers that the map is zoomed into a key area when the user clicks a button
     * 
     * @param {Event} e The click event
     */
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

    /**
     * Function that sets the map view back to its initial state and registers that the map is not zoomed into a key area when the user clicks the "show all areas" button
     */
    function handleZoomOut() {
        map.flyTo(mapCenter, mapZoom);
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
