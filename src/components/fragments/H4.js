import ContentBox from './../ContentBox';

export default function H4({feature, setFeatureFocus}) {

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} />
        </div>
  );
}
