import L from 'leaflet';
import { Polyline, Marker } from 'react-leaflet';
import ContentBox from './../ContentBox';

export default function A2({ feature, setFeatureFocus }) {

    const properties = feature.properties;

    const icon = L.divIcon({
        html: '<i class="bi bi-house-fill" style="color:var(--darya);font-size:1.8rem"/>',
        className: 'story-icon',
        iconAnchor: [13,20]
    });

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span 
                    style={{color: "var(--primary)", fontSize: "8pt"}}>
                    Auf der Karte sind Azars Lieblingspark in Münster und Daryas Wohnung in Köln markiert.<br/>
                </span>
            </ContentBox>
            <Polyline 
                positions={[[51.963718, 7.60855], [50.96099513916005, 6.9507913696124035]]}
                pathOptions={{color: 'var(--darya)', weight: 5, opacity: 0.7, dashArray: '1, 20', dashOffset: '0'}}
                interactive={false}/>
            <Marker
                position={[50.96099513916005, 6.9507913696124035]}
                icon={icon}
                interactive={false} /> 

        </div>
  );
}
