import { useEffect } from 'react';
import ContentBox from '../ContentBox';
import birds from '../../data/D6/Qeshm.m4a';
import azan from '../../data/D6/Azan_Qeshm.m4a';
import './css/D6.css';

/**
 * Component displaying the text, location description, character bio, and visual effects and playing the audios related to the the narrative fragment D6
 *
 * @param {object} props
 * @param {GeoJSON.Feature} props.feature The geo-object that was clicked on by the user
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function D6({ feature, setFeatureFocus, children }) {
  /**
     * Plays the audios on repeat and pauses them when the content box is closed
     */
  useEffect(() => {
    const azanAudio = new Audio(azan);
    azanAudio.play();
    azanAudio.loop = true;

    const birdsAudio = new Audio(birds);
    birdsAudio.play();
    birdsAudio.loop = true;

    return () => {
      birdsAudio.pause();
      azanAudio.pause();
    };
  }, []);

  return (
    <div>
      <div
        id="sunny-overlay"
      />
      <ContentBox
        narrativeFragment={feature.properties.text}
        person={feature.properties.person}
        setFeatureFocus={setFeatureFocus}
      >
        <span
          style={{ color: 'var(--primary)', fontSize: '8pt' }}
        >
          Auf der Karte ist Hengam, eine Nebeninsel von Qeschm im Persischen Golf markiert.
          <br />
          <br />
        </span>
        {children}
      </ContentBox>
    </div>
  );
}
