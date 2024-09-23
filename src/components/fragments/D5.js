import { useEffect } from 'react';
import ContentBox from './../ContentBox';
import rainSound from './../../data/D5/rain_thunder_compressed_large.wav';
import './css/D5.css';

export default function D5({ feature, setFeatureFocus }) {

    const soundAttribution = 'Rain_thunder_garden by Suso_Ramallo\nhttps://freesound.org/s/482684/\nLicense: Attribution 4.0';

    useEffect(() => {
        const rainAudio = new Audio(rainSound);
        rainAudio.play();
        rainAudio.loop = true;
        return () => rainAudio.pause();
    });

    return (
        <div>
            <div
                id='gloomy-overlay' />
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span
                    style={{ color: 'var(--primary)', fontSize: '8pt' }}>
                    Auf der Karte ist Daryas ehemalige Schule in Speyer markiert.<br />
                    <br />
                </span>
                <p
                    id='attribution'>
                    Audio: {soundAttribution}
                </p>
            </ContentBox>
        </div>
    );
}
