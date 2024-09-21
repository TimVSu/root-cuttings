import ContentBox from './../ContentBox';

export default function A2({feature, setFeatureFocus}) {

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
