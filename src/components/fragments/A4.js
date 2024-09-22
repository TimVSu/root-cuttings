import ContentBox from './../ContentBox';

export default function A4({ feature, setFeatureFocus }) {

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span 
                    style={{color: "var(--primary)", fontSize: "8pt"}}>
                    Auf der Karte ist das Amt für Migration und Integration in Münster markiert.<br/>
                </span>
            </ContentBox>
        </div>
  );
}
