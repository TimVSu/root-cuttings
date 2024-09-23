import ContentBox from './../ContentBox';

export default function H1({ feature, setFeatureFocus }) {

    return (
        <div>
            <ContentBox
                narrativeFragment={feature.properties.text}
                person={feature.properties.person}
                setFeatureFocus={setFeatureFocus} >
                <p
                    style={{ color: 'var(--primary)', fontSize: '8pt', marginTop: '-10px' }}>
                    Auf der Karte ist Hadis Wohnung in Speyer markiert.<br />
                    <br />
                </p>
                <div
                    className='d-flex justify-content-center'>
                    <iframe
                        width='40%'
                        height='240'
                        title='Ice Flower'
                        src='https://www.youtube.com/embed/YRdih8Hckj4?loop=1&playlist=YRdih8Hckj4'>
                    </iframe>
                </div>
                <br />
            </ContentBox>
        </div>
    );
}
