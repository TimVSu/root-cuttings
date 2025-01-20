import React from 'react';
import ContentBox from './ContentBox';

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
            fontFamily: "'Indie Flower', cursive",
          }}
        >
          <h1>{`${person}'s Tagebuch`}</h1>
        </div>
      </ContentBox>
    </div>
  );
}
