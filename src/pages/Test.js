import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos.js";
import '../App.css';
// import logo from '../sfflogo.svg';

import SFFtheme from '../Theme.js';

// const today = new Date();

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../img/projects/TOTO/', false, /\.(png|jpe?g|svg)$/));

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <h1>TEST</h1>
      <ol>
        {images.map(photo => <li>{photo}</li>)}
      </ol>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default App;

// function ReptileList() {
//   const reptiles = ['alligator', 'snake', 'lizard'];

//   return (
//     <ol>
//       {reptiles.map(reptile => (
//         <li key={reptile}>{reptile}</li>
//       ))}
//     </ol>
//   );
// }