import React from 'react';
import ThumbnailMain from './thumbnail-main.jsx';
import {
  ModalContainer,
  LModalContainer,
  RModalContainer,
  ModalNavBar,
  CarouselContainer,
  ExitButton
} from '../CSS/modalCSS.js';
import {
  ActivePhoto,
  RightChevron,
  LeftChevron
} from '../CSS/thumbnail-galleryCSS.js';



const Modal = ({toggleModal, activeThumbnail, handleLeftChevron, handleRightChevron}) => {
  return (
    <ModalContainer>
    <ModalNavBar>
        <div>TODO: TAGS</div>

        <ExitButton onClick={toggleModal}><i className="fas fa-times"></i></ExitButton>
    </ModalNavBar>
      {/* left container */}
    <CarouselContainer>
      <LModalContainer>
      <ActivePhoto onClick={toggleModal} css={{
          backgroundImage: `url("${activeThumbnail.img_url}")`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
      }}>
        {/* <RightChevron onClick={handleRightChevron}><i className="fas fa-chevron-right"></i></RightChevron>
        <LeftChevron onClick={handleLeftChevron}><i className="fas fa-chevron-left"></i></LeftChevron> */}
        </ActivePhoto>
      </LModalContainer>
      <RModalContainer>
        <div style={{padding:'3rem'}}>
    <body css={{fontFamily: 'Arial', fontSize: 'medium'}}>{activeThumbnail.tag}</body>
    <body css={{fontFamily: 'Arial', fontSize: 'small'}}>{activeThumbnail.img_description}</body>

        </div>

      </RModalContainer>
    </CarouselContainer>
    </ModalContainer>
  )
}

export default Modal;