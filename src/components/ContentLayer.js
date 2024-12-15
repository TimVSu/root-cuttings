import L from 'leaflet';
import { GeoJSON, useMap } from 'react-leaflet';
import {
  useEffect, useState, createContext, useContext, useMemo,
} from 'react';
import features from '../data/narrative_fragments.json';
import PlaceList from './PlaceList';
import InfoToast from './InfoToast';
import FragmentViz from './FragmentViz';
import leftArrow from '../data/icons/left-arrow.png';
import rightArrow from '../data/icons/right-arrow.png';

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
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(MAP_CENTER);
  const [currentZoom, setCurrentZoom] = useState(DEFAULT_ZOOM);

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
    setSelectedFeatureIndex(null);
    setSelectedFeature(null);
    setCurrentCenter(MAP_CENTER);
    setCurrentZoom(DEFAULT_ZOOM);
  };

  const isFirstPart = (feature) => FEATURE_MAPPING[feature.properties.person][0].id === feature.id;

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

  const attachEventListener = (feature, layer) => {
    layer.on('click', () => {
      setSelectedFeatureIndex(features.features.indexOf(feature));
      setSelectedFeature(feature);
      setCurrentCenter([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
      setCurrentZoom(FEATURE_ZOOM);
    });
  };

  useEffect(() => {
    if (currentCenter && currentZoom) {
      map.flyTo(currentCenter, currentZoom);
    }
  }, [currentCenter, currentZoom, map]);

  const contextValues = useMemo(() => ({
    resetMap,
    selectedFeature,
    setSelectedFeature,
    selectedFeatureIndex,
    setSelectedFeatureIndex,
    currentCenter,
    setCurrentCenter,
    currentZoom,
    setCurrentZoom,
  }), [selectedFeature, selectedFeatureIndex, currentCenter, currentZoom]);

  return (
    <ContentContext.Provider value={contextValues}>
      {selectedFeature
        ? (
          <FragmentViz
            selectedFeature={selectedFeature}
          >
            <div className="d-flex justify-content-between">
              {!isFirstPart(selectedFeature)
              && (
              <button className="icon-button" aria-label="zurück" type="button" onClick={prevFeature}>
                <img src={leftArrow} alt="" className="arrow-icon" />
              </button>
              )}
              {!isLastPart(selectedFeature)
              && (
              <button className="icon-button" aria-label="vor" type="button" onClick={nextFeature}>
                <img src={rightArrow} alt="" className="arrow-icon" />
              </button>
              )}
            </div>
          </FragmentViz>
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
