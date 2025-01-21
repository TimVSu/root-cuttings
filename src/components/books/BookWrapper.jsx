import React, {
  useRef, useContext, createContext, useState,
} from 'react';
import '../css/App.css';
import HTMLFlipBook from 'react-pageflip';
import { useMap } from 'react-leaflet';

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

function BookWrapper({ startPage, updatePage, children }) {
  const bookRef = useRef();
  const map = useMap();
  const [currentPage, setCurrentPage] = useState(0);

  const onInit = (pageNumber) => {
    if (pageNumber !== 1) {
      bookRef.current.pageFlip().turnToPage(pageNumber);
      setCurrentPage(pageNumber);
    }
  };

  const onUpdate = (pageNumber) => {
    if (pageNumber !== (1 || 0)) {
      updatePage(pageNumber - 1);
      setCurrentPage(pageNumber);
    }
    setCurrentPage(pageNumber);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="flipbook-wrapper"
      onMouseDown={() => { map.dragging.disable(); }}
      onMouseUp={() => { map.dragging.enable(); }}
    >
      <BookContext.Provider value={currentPage}>
        <HTMLFlipBook
          width={679}
          height={740}
          startZIndex={490}
          className="flipbook"
          ref={bookRef}
          maxShadowOpacity={0.2}
          onInit={() => onInit(startPage)}
          onFlip={(pageNumber) => onUpdate(pageNumber.data)}
        >
          {children}
        </HTMLFlipBook>
      </BookContext.Provider>
    </div>
  );
}

export default BookWrapper;
