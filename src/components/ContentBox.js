import { useState, useEffect } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import bios from '../data/bios.json';
import './css/ContentBox.css';

export default function ContentBox({
  children, narrativeFragment, person,
}) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [bio, setBio] = useState({});

  useEffect(() => {
    if (person) {
      setBio(bios[person]);
    }
  }, [person]);

  return (
    <Card
      id="content-box"
    >
      <Card.Body
        id="card-body"
      >
        <Card.Text className="m-4 narrative-fragment-text">
          {Array.isArray(narrativeFragment)
            ? narrativeFragment.map((segment) => (
              <span
                key={segment.id}
                title={segment.hover || ''}
                style={segment.hover ? { textDecoration: 'underline', cursor: 'help' } : {}}
              >
                {segment.content}
              </span>
            ))
            : narrativeFragment}
        </Card.Text>
        {children}
        <br />
        <p>
          {bio.short_bio}
        </p>
        <Button
          variant="link"
          id="show-more-button"
          onClick={() => setCollapseOpen(!collapseOpen)}
          aria-controls="character-info"
          aria-expanded={collapseOpen}
        >
          {collapseOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </Button>
        <Collapse
          in={collapseOpen}
          id="show-more-collapse"
        >
          <div
            id="long-bio"
          >
            {bio.long_bio}
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
