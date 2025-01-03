import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { Image } from 'react-bootstrap';
import ContentBox from '../ContentBox';
import image from '../../data/H3/working.png';
import './css/H3.css';
import '../css/App.css';
/**
 * Component displaying the text, location description, image, character bio, and visual effects related to the narrative fragment H3
 *
 * @param {object} props
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function H3({ feature, setFeatureFocus, children }) {
  /**
     * The Leaflet map object
     */
  const map = useMap();
  /**
     * Coordinates of the selected geo-object
     */
  const coords = feature.geometry.coordinates;
  /**
     * Modified coordinates to fit the layout with the content box
     */
  const modifiedCoords = [coords[0] - 0.023, coords[1]];

  /**
     * Creates a visual effect that simulates an earth quake
     */
  useEffect(() => {
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
  });

  return (
    <div>
      <ContentBox
        person={feature.properties.person}
        setFeatureFocus={setFeatureFocus}
      >
        <div
          className="narrative-fragment-text"
          dangerouslySetInnerHTML={{ __html: feature.properties.text }}
        />
        <p
          style={{ color: 'var(--primary)', fontSize: '8pt', marginTop: '-10px' }}
        >
          Auf der Karte ist das Dorf Aghuzlu markiert, aus dem Hadis Eltern stammen.
          <br />
          <br />
        </p>
        <div
          className="d-flex justify-content-center"
        >
          <Image
            id="h3-image"
            src={image}
            rounded
          />
        </div>
        {children}
      </ContentBox>
    </div>
  );
}
