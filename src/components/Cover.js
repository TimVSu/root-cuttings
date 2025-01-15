import React from 'react';
import ContentBox from './ContentBox';

/**
 * Component displaying the cover page for a narrative diary
 *
 * @param {object} props
 * @param {string} props.person The name of the narrator for the diary
 * @returns {React.JSX.Element}
 */
export default function Cover({ person }) {
  return (
    <div>
      <ContentBox person={person}>
        <div
          style={{
            textAlign: 'center',
            marginTop: '50%',
            fontSize: '40pt',
            color: 'var(--primary)',
          }}
        >
          <h1>{`${person}'s Tagebuch`}</h1>
        </div>
      </ContentBox>
    </div>
  );
}
