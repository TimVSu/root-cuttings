import { useEffect, useState } from 'react';
import ContentBox from './ContentBox';

export default function FragmentViz({selectedFeature, featureFocus, setFeatureFocus}) {

    const [featureProperties, setFeatureProperties] = useState({});

    useEffect(() => {
        if (selectedFeature.properties) {
            setFeatureProperties(selectedFeature.properties);
        }
    }, [selectedFeature]);

    return (
        <ContentBox
            narrativeFragment={featureProperties.text}
            person={featureProperties.person}
            featureFocus={featureFocus}
            setFeatureFocus={setFeatureFocus} />
    );
}

