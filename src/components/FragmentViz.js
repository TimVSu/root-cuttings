import L from 'leaflet';
import { Marker } from 'react-leaflet';
import BookWrapper from './books/BookWrapper';
import features from '../data/narrative_fragments.json';
import Cover from './Cover';
import A1 from './fragments/A1';
import A2 from './fragments/A2';
import A3 from './fragments/A3';
import A4 from './fragments/A4';
import D1 from './fragments/D1';
import D2 from './fragments/D2';
import D3 from './fragments/D3';
import D5 from './fragments/D5';
import D6 from './fragments/D6';
import D7 from './fragments/D7';
import H1 from './fragments/H1';
import H3 from './fragments/H3';
import H4 from './fragments/H4';
import H5 from './fragments/H5';

const MAP_DATA_INDICES = {
  A1: 1,
  A2: 2,
  A3: 3,
  A4: 4,
  D1: 1,
  D2: 2,
  D3: 3,
  D5: 4,
  D6: 4,
  D7: 6,
  H1: 1,
  H3: 2,
  H4: 3,
  H5: 4,
};

/**
 * Component displaying the narrative fragment, media, and visualizations of the selected geo-object
 *
 * @param {object} props
 * @param {GeoJSON.Feature} props.selectedFeature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function FragmentViz({
  selectedFeature, updatePage,
}) {
  /**
     * Coordinates of the geo-object
     */
  const { coordinates } = selectedFeature.geometry;
  /**
     * Name of the narrating character of the selected geo-object used to set the color of the marker icon
     */
  const markerColor = selectedFeature.properties.person.toLowerCase();

  /**                    <button className='icon-button'>
                        <img src={rightArrow} className='icon'/>
                    </button>
     * Icon of the marker shown on the map when a geo-object is selected
     */
  const icon = L.divIcon({
    html: `<i class="bi bi-chat-left-dots-fill" style="color:var(--${markerColor});font-size:1.6rem"/>`,
    className: 'story-icon',
    iconAnchor: [0, 30],
  });

  return (
    <div>
      <Marker
        position={[coordinates[1], coordinates[0]]}
        icon={icon}
        interactive={false}
      />
      {(() => {
        switch (selectedFeature.properties.person) {
          case 'Azar':
            return (
              <BookWrapper startPage={MAP_DATA_INDICES[selectedFeature.id]} updatePage={updatePage}>
                <div><Cover person="Azar" /></div>
                <div><A1 feature={features.features[6]} /></div>
                <div><A2 feature={features.features[7]} /></div>
                <div><A3 feature={features.features[8]} /></div>
                <div><A4 feature={features.features[9]} /></div>
              </BookWrapper>
            );
          case 'Darya':
            return (
              <BookWrapper startPage={MAP_DATA_INDICES[selectedFeature.id]} updatePage={updatePage}>
                <div><Cover person="Darya" /></div>
                <div><D1 feature={features.features[0]} /></div>
                <div><D2 feature={features.features[1]} /></div>
                <div><D3 feature={features.features[2]} /></div>
                <div><D5 feature={features.features[3]} /></div>
                <div><D6 feature={features.features[4]} /></div>
                <div><D7 feature={features.features[5]} /></div>
              </BookWrapper>
            );
          case 'Hadi':
            return (
              <BookWrapper startPage={MAP_DATA_INDICES[selectedFeature.id]} updatePage={updatePage}>
                <div><Cover person="Hadi" /></div>
                <div><H1 feature={features.features[10]} /></div>
                <div><H3 feature={features.features[11]} /></div>
                <div><H4 feature={features.features[12]} /></div>
                <div><H5 feature={features.features[13]} /></div>
              </BookWrapper>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
