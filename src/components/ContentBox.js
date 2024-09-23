import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks'
import { Button, Card, Collapse } from 'react-bootstrap';
import { mapCenter, mapZoom } from './App';
import bios from './../data/bios.json';
import './css/ContentBox.css';

/**
 * Component displaying a box containing a narrative fragment, the related media, any embedded child elements and the narrating character's bio
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children Embedded children
 * @param {string} props.narrativeFragment The narrative fragment to be displayed
 * @param {string} props.person The name of the narrating character
 * @param {React.Dispatch} props.setFeatureFocus Function to update the value indicating whether a geo-object is currently selected or not
 * @returns {React.JSX.Element}
 */
export default function ContentBox({ children, narrativeFragment, person, setFeatureFocus }) {

    /**
     * State storing a boolean value indicating whether the long character bio is collapsed
     */
    const [collapseOpen, setCollapseOpen] = useState(false);
    /**
     * State storing an object containing the short and long character bio
     */
    const [bio, setBio] = useState({});
    /**
     * The Leaflet map object
     */
    const map = useMap();

    /**
     * Function that deselects the geo-object and sets the map view back to its initial state when the user clicks the close button of the content box
     */
    function handleClose() {
        setFeatureFocus(false);
        map.setView(mapCenter, mapZoom);
    }

    /** 
     * Sets the value of the character bio when the content box is opened
     * */
    useEffect(() => {
        if (person) {
            setBio(bios[person]);
        }
    }, [person]);

    return (
        <Card
            id='content-box'>
            <Button
                variant='link'
                id='close-content-box'
                title='schließen'
                onClick={handleClose}>
                x
            </Button>
            <Card.Body
                id='card-body'>
                <Card.Text
                    className='mb-4'>
                    {narrativeFragment}
                </Card.Text>
                {children}
                <br />
                <p>
                    {bio.short_bio}
                </p>
                <Button
                    variant='link'
                    id='show-more-button'
                    onClick={() => setCollapseOpen(!collapseOpen)}
                    aria-controls='character-info'
                    aria-expanded={collapseOpen}>
                    {collapseOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                </Button>
                <Collapse
                    in={collapseOpen}
                    id='show-more-collapse'>
                    <div
                        id='long-bio'>
                        {bio.long_bio}
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
}
