import L from 'leaflet';
import { GeoJSON, useMap } from 'react-leaflet';
import { Button } from 'react-bootstrap';
import {
  useState, createContext, useContext, useMemo,
  useEffect,
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import features from '../data/narrative_fragments.json';
import FragmentViz from './FragmentViz';
import PlaceList from './PlaceList';
import InfoToast from './InfoToast';
import './css/App.css';

export const MAP_CENTER = [40.637262, 32.083669];
export const DEFAULT_ZOOM = 4.5;
export const FEATURE_ZOOM = 11;
export const FEATURE_MAPPING = {
  Darya: ['D1', 'D2', 'D3', 'D5', 'D6', 'D7'],
  Azar: ['A1', 'A2', 'A3', 'A4'],
  Hadi: ['H1', 'H3', 'H4', 'H5'],
};

const ContentContext = createContext();

export const useContentContext = () => useContext(ContentContext);

export default function ContentLayer() {
  const map = useMap();
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(MAP_CENTER);
  const [currentZoom, setCurrentZoom] = useState(DEFAULT_ZOOM);
  // const [earthquake, setEarthquake] = useState(false);

  const styleMarker = (geoJsonPoint, latLng) => {
    const markerColor = geoJsonPoint.properties.person.toLowerCase();
    const icon = L.divIcon({
      html: `<i class="bi bi-chat-left-text-fill" style="color:var(--${markerColor});font-size:1.6rem"/>`,
      className: 'story-icon',
      iconAnchor: [0, 30],
    });
    return L.marker(latLng, { icon });
  };

  const resetMap = () => {
    setSelectedFeature(null);
    setCurrentCenter(MAP_CENTER);
    setCurrentZoom(DEFAULT_ZOOM);
  };

  const updatePage = (pageNumber) => {
    const newId = FEATURE_MAPPING[selectedFeature.properties.person][pageNumber.data];
    const newFeature = features.features.filter((feature) => feature.id === newId)[0];
    setSelectedFeature(newFeature);
    setCurrentCenter([newFeature.geometry.coordinates[1], newFeature.geometry.coordinates[0]]);
    setCurrentZoom(FEATURE_ZOOM);
  };

  /*
  const isFirstPart = (feature) => FEATURE_MAPPING[feature.properties.person][0] === feature.id;

  const isLastPart = (feature) => {
    const idArray = FEATURE_MAPPING[feature.properties.person];
    return idArray[idArray.length - 1] === feature.id;
  };

  const nextFeature = () => {
    if (!selectedFeatureIndex || isLastPart(selectedFeature)) return;
    const feature = features.features[selectedFeatureIndex + 1];
    setSelectedFeatureIndex(selectedFeatureIndex + 1);
    setSelectedFeature(feature);
    setCurrentCenter([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
    setCurrentZoom(FEATURE_ZOOM);
  };

  const prevFeature = () => {
    if (!selectedFeatureIndex || isFirstPart(selectedFeature)) return;
    const feature = features.features[selectedFeatureIndex - 1];
    setSelectedFeatureIndex(selectedFeatureIndex - 1);
    setSelectedFeature(feature);
    setCurrentCenter([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
    setCurrentZoom(FEATURE_ZOOM);
  };
  */

  const attachEventListener = (feature, layer) => {
    layer.on('click', () => {
      setSelectedFeature(feature);
      setCurrentCenter([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
      setCurrentZoom(FEATURE_ZOOM);
    });
  };

  useEffect(() => {
    map.flyTo(currentCenter, currentZoom);
  }, [currentCenter, currentZoom, map]);

  /* useEffect(() => {
    document.getElementById('close-content-box').classList.add('disabled');
    let interval1; let interval2; let
      interval3;
    setTimeout(() => {
      interval1 = setInterval(() => {
        map.setView([modifiedCoords[1] - 0.0013, modifiedCoords[0] + 0.0011]);
      }, 90);
      interval2 = setInterval(() => {
        map.setView([modifiedCoords[1] - 0.00099, modifiedCoords[0] - 0.001]);
      }, 75);
      interval3 = setInterval(() => {
        map.setView([modifiedCoords[1] + 0.00089, modifiedCoords[0] + 0.001]);
      }, 80);
      document.getElementById('close-content-box').classList.remove('disabled');
    }, 3000);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }); */

  const contextValues = useMemo(() => ({
    resetMap,
    selectedFeature,
    setSelectedFeature,
    currentCenter,
    setCurrentCenter,
    currentZoom,
    setCurrentZoom,
  }), [selectedFeature, currentCenter, currentZoom]);

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <ContentContext.Provider value={contextValues}>
      {selectedFeature
        ? (
          <>
            <FragmentViz selectedFeature={selectedFeature} updatePage={updatePage} />
            <Button
              className="back-to-map-button"
              onClick={resetMap}
            >
              Zurück zur Karte
            </Button>
          </>
        )
        : (
          <div>
            <InfoToast />
            <PlaceList setCurrentZoom={setCurrentZoom} setCurrentCenter={setCurrentCenter} currentZoom={currentZoom} resetMap={resetMap} />
            <GeoJSON
              data={features}
              pointToLayer={styleMarker}
              onEachFeature={attachEventListener}
            />
          </div>
        )}

    </ContentContext.Provider>
  );
}
