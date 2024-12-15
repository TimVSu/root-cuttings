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

/**
 * Component displaying the narrative fragment, media, and visualizations of the selected geo-object
 *
 * @param {object} props
 * @param {GeoJSON.Feature} props.selectedFeature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function FragmentViz({
  selectedFeature, setFeatureFocus, children,
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
        switch (selectedFeature.id) {
          case 'A1':
            return (
              <A1 feature={selectedFeature}>
                {children}
              </A1>
            );
          case 'A2':
            return (
              <A2 feature={selectedFeature}>
                {children}
              </A2>
            );
          case 'A3':
            return (
              <A3 feature={selectedFeature}>
                {children}
              </A3>
            );
          case 'A4':
            return (
              <A4 feature={selectedFeature}>
                {children}
              </A4>
            );
          case 'D1':
            return (
              <D1 feature={selectedFeature}>
                {children}
              </D1>
            );
          case 'D2':
            return (
              <D2 feature={selectedFeature}>
                {children}
              </D2>
            );
          case 'D3':
            return (
              <D3 feature={selectedFeature}>
                {children}
              </D3>
            );
          case 'D5':
            return (
              <D5 feature={selectedFeature}>
                {children}
              </D5>
            );
          case 'D6':
            return (
              <D6 feature={selectedFeature}>
                {children}
              </D6>
            );
          case 'D7':
            return (
              <D7 feature={selectedFeature}>
                {children}
              </D7>
            );
          case 'H1':
            return (
              <H1 feature={selectedFeature}>
                {children}
              </H1>
            );
          case 'H3':
            return (
              <H3 feature={selectedFeature} setFeatureFocus={setFeatureFocus}>
                {children}
              </H3>
            );
          case 'H4':
            return (
              <H4 feature={selectedFeature}>
                {children}
              </H4>
            );
          case 'H5':
            return (
              <H5 feature={selectedFeature}>
                {children}
              </H5>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
