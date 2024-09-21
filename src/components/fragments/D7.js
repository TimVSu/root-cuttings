import { useState } from 'react';
import { useMap } from 'react-leaflet/hooks';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ContentBox from './../ContentBox';
import './css/D7.css';

export default function D7({feature, setFeatureFocus}) {

    const [showModal, setShowModal] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const map = useMap();const properties = feature.properties;

    function handleChoice () {
        setShowModal(false);
        map.flyTo([50.037832541828124, 8.551775972924135-0.012]);
        setTimeout(() => {
            setShowToast(true);
        }, 6000)
    }

    return (
        <div>
            <Toast
                show={showToast}>
                <Button
                    variant="link"
                    id="close-toast"
                    onClick={() => setShowToast(false)}>
                    x
                </Button>
                <Toast.Body
                    className="mt-3">
                    Das war eine rhetorische Frage.
                    <br />
                    Willkommen in Deutschland!
                </Toast.Body>
            </Toast>
            <ContentBox
                narrativeFragment={properties.text}
                person={properties.person}
                setFeatureFocus={setFeatureFocus} />

            <Modal
                show={showModal}
                backdrop="static"
                keyboard={false}
                centered>
                <Modal.Body>
                    <p>Bist du bereit, alles hinter dir zu lassen?</p>
                    <Stack
                        gap={1}>
                        <Button
                            className='modal-button'
                            onClick={handleChoice}>
                            Moment mal.. Worum geht's überhaupt?
                        </Button>
                        <Button
                            className='modal-button'
                            onClick={handleChoice}>
                            Kann ich kurz überlegen?
                        </Button>
                        <Button
                            className='modal-button'
                            onClick={handleChoice}>
                            Nein!
                        </Button>
                    </Stack>
                </Modal.Body>
            </Modal>
        </div>
  );
}
