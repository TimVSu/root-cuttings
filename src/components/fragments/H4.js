import ContentBox from './../ContentBox';

export default function H4({ feature, setFeatureFocus }) {

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span 
                    style={{color: "var(--primary)", fontSize: "8pt"}}>
                    Auf der Karte sind die Stufen am Rhein in Speyer markiert, auf die sich Hadi nach der Arbeit gerne hinsetzt und seine Gedanken schweifen lässt.<br/>
                </span>
            </ContentBox>
        </div>
  );
}
