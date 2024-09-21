import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { MAPCENTER } from './Map';
import bios from './../data/bios.json';
import './css/ContentBox.css';

export default function ContentBox({children, narrativeFragment, person, setFeatureFocus}) {

    const [collapseOpen, setCollapseOpen] = useState(false);
    const [bio, setBio] = useState({});
    const map = useMap();


    function handleClose() {
        setFeatureFocus(false);
        map.setView(MAPCENTER, 4.5);
    }

    useEffect(() => {
        if (person) {
            setBio(bios[person]);
        }
    }, [person]);

    return (
        <Card 
            id="content-box">
            <Button
                variant="link" 
                id="close-contentbox" 
                onClick={handleClose}>
                x
            </Button>
            <Card.Body 
                id="contentbox-body">
                <Card.Text 
                    className="mb-4">
                    {narrativeFragment}
                </Card.Text>
                {children}
                <br/>
                <p>
                    {bio.short_bio}
                </p>
                <Button 
                    variant="link" 
                    id="show-more-button" 
                    onClick={() => setCollapseOpen(!collapseOpen)} 
                    aria-controls="character-info" 
                    aria-expanded={collapseOpen}>
                    {collapseOpen ? "Weniger anzeigen" : "Mehr anzeigen"}
                </Button>
                <Collapse 
                    in={collapseOpen} 
                    id="show-more-collapse">
                    <div 
                        id="long-bio">
                        {bio.long_bio}
                    </div>
                </Collapse>
            </Card.Body>
        </Card> 
    );
}
