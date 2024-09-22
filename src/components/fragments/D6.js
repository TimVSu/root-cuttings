import ContentBox from './../ContentBox';

export default function D6({ feature, setFeatureFocus }) {

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span 
                    style={{color: "var(--primary)", fontSize: "8pt"}}>
                    Auf der Karte ist Hengam, eine Nebeninsel von Qeschm im Persischen Golf markiert.<br/>
                    <br/>
                </span>
            </ContentBox>
        </div>
  );
}
