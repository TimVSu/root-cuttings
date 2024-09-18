import { GeoJSON } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks'
import L from 'leaflet';
import locations from './../data/narrative_fragments.json';

export default function GeoFeatures({setSelectedFeature, featureFocus, setFeatureFocus}) {

    const map = useMap()

    function styleMarker(geoJsonPoint, latLng) {
        let icon = L.divIcon({
            html: '<i class="bi bi-chat-left-text-fill" style="color:var(--marker);font-size:1.6rem"/>',
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
            map.flyTo([lat, lng-0.012], 15);
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
