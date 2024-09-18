import { useState } from 'react';
import { MapContainer, ZoomControl } from 'react-leaflet';
import LBaseLayer from './LBaseLayer';
import GeoFeatures from './GeoFeatures';
import FragmentViz from './FragmentViz';
import './css/Map.css';

export default function Map() {

    const [selectedFeature, setSelectedFeature] = useState(null);
    const [featureFocus, setFeatureFocus] = useState(false);

    const MAPS = {
        esriWorldImagery: {
            url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          }
    }

    return (
        <MapContainer
            className="mapcontainer"
            center={[40.637262, 32.083669]}
            zoomControl={false}
            zoom={4.5}
            minZoom={4.5}
            maxZoom={15}
            zoomSnap={0.5}
            zoomDelta={0.5}
            maxBounds={[[90, -180], [-90, 180]]}
            maxBoundsViscosity={1.0}>
            <LBaseLayer 
                url={MAPS.esriWorldImagery.url}
                attribution={MAPS.esriWorldImagery.attribution}/>
            <ZoomControl 
                position="topright"/>
            <GeoFeatures 
                setSelectedFeature={setSelectedFeature}
                featureFocus={featureFocus} 
                setFeatureFocus={setFeatureFocus}/>
            { featureFocus ?
                <FragmentViz 
                    selectedFeature={selectedFeature}
                    setFeatureFocus={setFeatureFocus}/> 
            : null }
        </MapContainer>
    );
}
