import ContentBox from './../ContentBox';

export default function A2({ feature, setFeatureFocus }) {

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span 
                    style={{color: "var(--primary)", fontSize: "8pt"}}>
                    Auf der Karte ist Azars Lieblingspark in Münster markiert.<br/>
                </span>
            </ContentBox>
        </div>
  );
}
