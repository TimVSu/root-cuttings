import ContentBox from './../ContentBox';

export default function H4({ feature, setFeatureFocus }) {

    return (
        <div>
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus}>
                <span
                    style={{ color: 'var(--primary)', fontSize: '8pt' }}>
                    Auf der Karte sind die Stufen am Rhein in Speyer markiert, auf die sich Hadi nach der Arbeit gerne hinsetzt, um die Gedanken schweifen zu lassen.<br />
                </span>
            </ContentBox>
        </div>
    );
}
