import ContentBox from './../ContentBox';
import ImageCarousel from '../ImageCarousel';
import souvenirIran from './../../data/A3/souvenir_iran.jpeg';
import souvenirVietnam from './../../data/A3/souvenir_vietnam.jpg';

export default function A3({ feature, setFeatureFocus }) {

    const imageAttribution = 'Phương Huy, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons';

    return (
        <div>
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <p
                    style={{ color: 'var(--primary)', fontSize: '8pt', marginTop: '-10px' }}>
                    Auf der Karte ist Café Tante August in Münster markiert.<br />
                    <br />
                </p>
                <ImageCarousel
                    images={[souvenirVietnam, souvenirIran]} />
                <p
                    id='attribution'>
                    <br />Foto 1: {imageAttribution}
                </p>
            </ContentBox>
        </div>
    );
}
