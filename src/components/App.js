import { useState } from 'react';
import { MapContainer, ZoomControl, TileLayer } from 'react-leaflet';
import GeoFeatures from './GeoFeatures';
import FragmentViz from './FragmentViz';
import PlaceList from './PlaceList';
import InfoToast from './InfoToast';
import './css/App.css';

export const MapCenter = [40.637262, 32.083669];

export default function App() {

    const [selectedFeature, setSelectedFeature] = useState(null);
    const [featureFocus, setFeatureFocus] = useState(false);
    const esriWorldImagery = {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    };

    return (
        <MapContainer
            className='map-container'
            center={MapCenter}
            zoomControl={false}
            zoom={4.5}
            minZoom={4.5}
            maxZoom={18}
            zoomSnap={0.5}
            zoomDelta={0.5}
            maxBounds={[[90, -180], [-90, 180]]}
            maxBoundsViscosity={1.0}>
            <TileLayer
                attribution={esriWorldImagery.attribution}
                url={esriWorldImagery.url}
                tileSize={512}
                zoomOffset={-1} />
            <ZoomControl
                position='bottomright' />
            {featureFocus ?
                <FragmentViz
                    selectedFeature={selectedFeature}
                    setFeatureFocus={setFeatureFocus} />
                : null}
            {!featureFocus ?
                <div>
                    <InfoToast />
                    <PlaceList />
                    <GeoFeatures
                        setSelectedFeature={setSelectedFeature}
                        setFeatureFocus={setFeatureFocus} />
                </div>
                : null}
        </MapContainer>
    );
}
