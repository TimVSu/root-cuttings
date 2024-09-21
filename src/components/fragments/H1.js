import ContentBox from './../ContentBox';

export default function H1({feature, setFeatureFocus}) {

    const properties = feature.properties;

    return (
        <div>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} >
                <iframe 
                    width="100%" 
                    height="300"
                    title="Ice Flower"
                    src="https://www.youtube.com/embed/YRdih8Hckj4?loop=1&playlist=YRdih8Hckj4">   
                </iframe>
            </ContentBox>
        </div>
  );
}
