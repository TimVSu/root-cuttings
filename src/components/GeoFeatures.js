import L from 'leaflet';
import { useMap } from 'react-leaflet/hooks';
import { GeoJSON } from 'react-leaflet';
import locations from './../data/narrative_fragments.json';

/**
 * Component displaying the geo-objects representing the narrative fragments on the map
 * 
 * @param {object} props 
 * @param {React.Dispatch} props.setSelectedFeature Function to set the value of the selectedFeature state to the geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */

export default function GeoFeatures({ setSelectedFeature, setFeatureFocus }) {

    /**
     * The Leaflet map object
     */
    const map = useMap();

    /**
     * Function that defines how the point geo-objects should be displayed on the map
     * 
     * @param {GeoJSON.Point} geoJsonPoint The point feature
     * @param {L.LatLng} latLng The latitude and longitude of the point feature
     * @returns {L.Marker}
     */
    function styleMarker(geoJsonPoint, latLng) {
        const markerColor = geoJsonPoint.properties.person.toLowerCase();
        const icon = L.divIcon({
            html: `<i class="bi bi-chat-left-text-fill" style="color:var(--${markerColor});font-size:1.6rem"/>`,
            className: 'story-icon',
            iconAnchor: [0, 30]
        });
        return L.marker(latLng, { icon: icon });
    }
    
    /**
     * Attaches a click event-listener to each map layer containing a geo-object: When a geo-object is clicked, it is stored in selectedFeature, 
     * the app registers that a geo-object has been selected, and the map view is focussed on the selected geo-object
     * 
     * @param {GeoJSON.Feature} feature The geo-oject.
     * @param {L.Layer} layer The Leaflet layer.
     */
    function attachEventListener(feature, layer) {
        layer.on('click', (e) => {
            setSelectedFeature(feature);
            setFeatureFocus(true);
            const { lat, lng } = e.target.getLatLng();
            map.flyTo([lat, lng - 0.023], 14);
        });
    }

    return (
        <GeoJSON
            data={locations}
            pointToLayer={styleMarker}
            onEachFeature={attachEventListener} />
    );
}
