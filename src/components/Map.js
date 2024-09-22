import { useState } from 'react';
import { MapContainer, ZoomControl } from 'react-leaflet';
import LBaseLayer from './LBaseLayer';
import GeoFeatures from './GeoFeatures';
import FragmentViz from './FragmentViz';
import PlaceList from './PlaceList';
import InfoToast from './InfoToast';
import './css/Map.css';

export const MAPCENTER = [40.637262, 32.083669];

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
            center={MAPCENTER}
            zoomControl={false}
            zoom={4.5}
            minZoom={4.5}
            maxZoom={18}
            zoomSnap={0.5}
            zoomDelta={0.5}
            maxBounds={[[90, -180], [-90, 180]]}
            maxBoundsViscosity={1.0}>
            <LBaseLayer 
                url={MAPS.esriWorldImagery.url}
                attribution={MAPS.esriWorldImagery.attribution}/>
            <ZoomControl 
                position="bottomright"/>
            { featureFocus ?
                <FragmentViz 
                    selectedFeature={selectedFeature}
                    setFeatureFocus={setFeatureFocus}/> 
            : null }
            { !featureFocus ?
                <div>
                    <InfoToast />
                    <PlaceList />
                    <GeoFeatures 
                        setSelectedFeature={setSelectedFeature}
                        setFeatureFocus={setFeatureFocus}/>
                </div>
            : null }
        </MapContainer>
    );
}
