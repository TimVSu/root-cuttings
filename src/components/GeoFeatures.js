import { GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import locations from './../data/narrative_fragments.json';

export default function GeoFeatures({setSelectedFeature, featureFocus, setFeatureFocus}) {

    function styleMarker(geoJsonPoint, latLng) {
        let icon = L.divIcon({
            html: '<i class="bi bi-chat-left-text-fill" style="color:#e0702c;font-size:1.5rem"/>',
            className: 'story-icon',
            iconAnchor: [0,30]
        });
        return L.marker(latLng, { icon: icon });
    }

    function onEachFeature(feature, layer){
        layer.on('click', () => {
            setSelectedFeature(feature);
            setFeatureFocus(true);
        });
    }

    return (
        <div>
            { !featureFocus ?
                <GeoJSON 
                    data={locations}
                    pointToLayer={styleMarker} 
                    onEachFeature={onEachFeature}/>
            : null }
        </div>
    );
}
