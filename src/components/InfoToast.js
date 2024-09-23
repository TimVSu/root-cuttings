import { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import './css/InfoToast.css';

export default function InfoToast() {
    const [showToast, setShowToast] = useState(true);

    return (
        <Toast
            show={showToast}
            id='info-toast'>
            <Button
                variant='link'
                id='close-toast'
                onClick={() => setShowToast(false)}>
                x
            </Button>
            <Toast.Body
                className='mt-3 p-3'>
                Willkommen!<br /><br />
                Auf dieser Seite erzählen dir <mark id='hadi-span'>Hadi</mark>, <mark id='azar-span'>Azar</mark> und <mark id='darya-span'>Darya</mark>,
                welche Auswirkungen die Migration nach Deutschland auf ihre Leben hatte.<br /><br />
                Um mehr über sie zu erfahren, klicke auf die Marker <i className='bi bi-chat-left-text-fill' id='toast-icon' /> auf der Karte.
                Um alle Marker an einem bestimmten Ort zu sehen, klicke auf der linken Seite auf den Ortsnamen.
            </Toast.Body>
        </Toast>
    );
}
