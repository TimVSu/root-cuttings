import L from 'leaflet';
import { Marker } from 'react-leaflet';
import A1 from './fragments/A1';
import A2 from './fragments/A2';
import A3 from './fragments/A3';
import A4 from './fragments/A4';
import D1 from './fragments/D1';
import D2 from './fragments/D2';
import D3 from './fragments/D3';
import D5 from './fragments/D5';
import D6 from './fragments/D6';
import H1 from './fragments/H1';
import H3 from './fragments/H3';
import H4 from './fragments/H4';
import H5 from './fragments/H5';
import D7 from './fragments/D7';

export default function FragmentViz({ selectedFeature, setFeatureFocus }) {

    const coordinates = selectedFeature.geometry.coordinates;
    const markerColor = selectedFeature.properties.person.toLowerCase();
    
    const icon = L.divIcon({
        html: `<i class="bi bi-chat-left-dots-fill" style="color:var(--${markerColor});font-size:1.6rem"/>`,
        className: 'story-icon',
        iconAnchor: [0,30]
    });

    return (
        <div>
            <Marker 
                position={[coordinates[1], coordinates[0]]}
                icon={icon}
                interactive={false} />  
            {(() => {
                switch (selectedFeature.id) {
                    case 'A1':
                        return <A1 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'A2':
                        return <A2 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'A3':
                        return <A3 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'A4':
                        return <A4 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'D1':
                        return <D1 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'D2':
                        return <D2 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'D3':
                        return <D3 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'D5':
                        return <D5 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'D6':
                        return <D6 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'D7':
                        return <D7 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'H1':
                        return <H1 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'H3':
                        return <H3 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'H4':
                        return <H4 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    case 'H5':
                        return <H5 feature={selectedFeature} setFeatureFocus={setFeatureFocus}/>
                    default:
                        return null
                }
            })()}          
        </div>
    );
}

