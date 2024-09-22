import L from 'leaflet';
import { GeoJSON } from 'react-leaflet';
import ContentBox from './../ContentBox';
import locations from './../../data/D3/diaspora.json';
import './css/D3.css';

export default function D3({ feature, setFeatureFocus }) {

    const properties = feature.properties;

    function styleMarker(geoJsonPoint, latLng) {
        const icon = L.divIcon({
            html: `<i class="bi bi-pin-fill" style="color:var(--darya);font-size:1.6rem"/>`,
            className: 'diaspora-icon',
            iconAnchor: [0, 30]
        });
        return L.marker(latLng, { icon: icon, interactive: false });
    }

    function onEachFeature(feature, layer) {
            layer.bindTooltip(feature.properties.name, { permanent: true, direction: 'center', className: 'diaspora-label' });
    }

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}> 
                <p 
                    style={{color: "var(--primary)", fontSize: "8pt"}}>
                    Auf der Karte sind Daryas Lieblingsorte und -veranstaltungen aus der iranischen Diaspora in Köln markiert.
                </p>
            </ContentBox>
            <GeoJSON 
                data={locations}
                pointToLayer={styleMarker} 
                onEachFeature={onEachFeature}/>
        </div>
  );
}
