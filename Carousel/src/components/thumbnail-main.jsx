import React from 'react';

import {
  PhotoMain,
  ActivePhoto,
  LeftChevron,
  RightChevron
} from '../CSS/thumbnail-galleryCSS.js'

const ThumbnailMain = ({ activeThumbnail, handleLeftChevron, handleRightChevron, toggleModal}) => {
  return (
    <PhotoMain>
      <ActivePhoto onClick={toggleModal} css={{
          backgroundImage: `url("${activeThumbnail.img_url}")`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
      }}>
        </ActivePhoto>
      <RightChevron onClick={handleRightChevron}><i className="fas fa-chevron-right"></i></RightChevron>
      <LeftChevron onClick={handleLeftChevron}><i className="fas fa-chevron-left"></i></LeftChevron>
    </PhotoMain>
  )
}

export default ThumbnailMain