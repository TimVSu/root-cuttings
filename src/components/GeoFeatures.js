import L from 'leaflet';
import { useMap } from 'react-leaflet/hooks'
import { GeoJSON } from 'react-leaflet';
import locations from './../data/narrative_fragments.json';

export default function GeoFeatures({ setSelectedFeature, setFeatureFocus }) {

    const map = useMap();

    function styleMarker(geoJsonPoint, latLng) {
        const markerColor = geoJsonPoint.properties.person.toLowerCase();
        const icon = L.divIcon({
            html: `<i class="bi bi-chat-left-text-fill" style="color:var(--${markerColor});font-size:1.6rem"/>`,
            className: 'story-icon',
            iconAnchor: [0,30]
        });
        return L.marker(latLng, { icon: icon });
    }

    function onEachFeature(feature, layer){
        layer.on('click', (e) => {
            setSelectedFeature(feature);
            setFeatureFocus(true);
            let {lat, lng} = e.target.getLatLng();
            map.flyTo([lat, lng-0.023], 14);
        });
    }

    return (
        <GeoJSON 
            data={locations}
            pointToLayer={styleMarker} 
            onEachFeature={onEachFeature}/>
    );
}
