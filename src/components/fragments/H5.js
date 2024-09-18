import ContentBox from './../ContentBox';

export default function H5({feature, setFeatureFocus}) {

    const properties = feature ? feature.properties : null;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} />
        </div>
  );
}
