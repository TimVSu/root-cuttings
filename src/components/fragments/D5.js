import { useEffect } from 'react';
import ContentBox from '../ContentBox';
import rainSound from '../../data/D5/rain_thunder_compressed_large.wav';
import './css/D5.css';

/**
 * Component displaying the text, location description, character bio, and visual effects and playing the audio related to the narrative fragment D5
 *
 * @param {object} props
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function D5({ feature, setFeatureFocus, children }) {
  /**
     * Attribution text for the audio
     */
  const soundAttribution = 'Rain_thunder_garden by Suso_Ramallo\nhttps://freesound.org/s/482684/\nLicense: Attribution 4.0';

  /**
     * Plays the audio on repeat and pauses it when the content box is closed
     */
  useEffect(() => {
    const rainAudio = new Audio(rainSound);
    rainAudio.play();
    rainAudio.loop = true;
    return () => rainAudio.pause();
  });

  return (
    <div>
      <div
        id="gloomy-overlay"
      />
      <ContentBox
        person={feature.properties.person}
        setFeatureFocus={setFeatureFocus}
      >
        <div
          className="narrative-fragment-text"
          dangerouslySetInnerHTML={{ __html: feature.properties.text }}
        />
        <span
          style={{ color: 'var(--primary)', fontSize: '8pt' }}
        >
          Auf der Karte ist Daryas ehemalige Schule in Speyer markiert.
          <br />
          <br />
        </span>
        <p
          id="attribution"
        >
          Audio:
          {' '}
          {soundAttribution}
        </p>
        {children}
      </ContentBox>
    </div>
  );
}
