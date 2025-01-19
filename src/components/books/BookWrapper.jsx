import React, { useRef } from 'react';
import '../css/App.css';
import HTMLFlipBook from 'react-pageflip';
import { useMap } from 'react-leaflet';

function BookWrapper({ startPage, updatePage, children }) {
  const bookRef = useRef();
  const map = useMap();

  return (
    <div
      role="button"
      tabIndex={0}
      className="flipbook-wrapper"
      onMouseDown={() => { map.dragging.disable(); }}
      onMouseUp={() => { map.dragging.enable(); }}
    >
      <HTMLFlipBook
        width={679}
        height={740}
        startZIndex={490}
        className="flipbook"
        ref={bookRef}
        maxShadowOpacity={0.2}
        onInit={() => startPage !== 1 && bookRef.current.pageFlip().turnToPage(startPage)}
        onFlip={(pageNumber) => pageNumber.data !== 0 && updatePage(pageNumber.data - 1)}
      >
        {children}
      </HTMLFlipBook>
    </div>
  );
}

export default BookWrapper;
