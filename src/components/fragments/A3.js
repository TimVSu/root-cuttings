import ContentBox from './../ContentBox';
import ImageCarousel from '../ImageCarousel';
import souvenir_iran from './../../data/A3/souvenir_iran.jpeg'; 
import souvenir_vietnam from './../../data/A3/souvenir_vietnam.jpg'; 

export default function A3({ feature, setFeatureFocus }) {

    const imageAttribution = 'Phương Huy, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons';

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <p 
                    style={{color: "var(--primary)", fontSize: "8pt", marginTop: "-10px"}}>
                        Auf der Karte ist Café Tante August in Münster markiert.<br/>
                    <br/>
                </p>
                <ImageCarousel 
                    images={[souvenir_vietnam, souvenir_iran]}/>
                <p
                    id="attribution">
                    <br/>Foto 1: {imageAttribution}
                </p>
            </ContentBox>
        </div>
  );
}
