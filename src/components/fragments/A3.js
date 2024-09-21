import { GeoJSON } from 'react-leaflet';
import ContentBox from './../ContentBox';
import L from 'leaflet';
import lines from './../../data/A3/friends.json';

export default function A3({feature, setFeatureFocus}) {

    const properties = feature.properties;

    function styleMarker(geoJsonPoint, latLng) {
        const icon = L.divIcon({
            html: '<div style="transform:rotate(298deg)"><i class="bi bi-airplane-engines-fill" style="color:var(--text);font-size:2rem"/></div>',
            className: 'airplane-icon'
            // TODO: change anchor
        });
        return L.marker(latLng, { icon: icon });
    }

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} />


            <GeoJSON 
                pointToLayer={styleMarker} 
                data={lines}/>
        </div>
  );
}
