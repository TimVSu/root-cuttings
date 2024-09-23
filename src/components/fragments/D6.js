import { useEffect } from 'react';
import ContentBox from './../ContentBox';
import birds from './../../data/D6/Qeshm.m4a';
import azan from './../../data/D6/Azan_Qeshm.m4a';
import './css/D6.css';

export default function D6({ feature, setFeatureFocus }) {

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
        }
    })

    return (
        <div>
            <div 
                id='sunny-overlay' />
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span
                    style={{ color: 'var(--primary)', fontSize: '8pt' }}>
                    Auf der Karte ist Hengam, eine Nebeninsel von Qeschm im Persischen Golf markiert.<br />
                    <br />
                </span>
            </ContentBox>
        </div>
    );
}
