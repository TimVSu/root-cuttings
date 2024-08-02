import { MapContainer, LayersControl } from 'react-leaflet';
import LBaseLayer from './LBaseLayer';
import './css/Map.css';

export default function Map() {

    return (
            <MapContainer
                className="mapcontainer"
                center={[50.983083, 10.325190]}
                zoom={7}
                minZoom={4}
                maxZoom={19}
                maxBounds={[[90, -180], [-90, 180]]}
                maxBoundsViscosity={1.0}
            >
                <LayersControl position="bottomleft">
                    <LayersControl.BaseLayer checked name="Streets">
                        <LBaseLayer id="mapbox/streets-v11" />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Satellite">
                        <LBaseLayer id="mapbox/satellite-v9" />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
    );
}
