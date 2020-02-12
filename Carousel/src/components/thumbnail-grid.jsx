import React from 'react';
import Thumbnail from './thumbnail.jsx'
import {
  PhotoGrid
} from '../CSS/thumbnail-galleryCSS.js'

const ThumbnailGrid = ({images, handleClick, activeIndex}) => {
  return (
    <PhotoGrid>
      {
        images.map((images, i) => {
          return <Thumbnail
          key= {images.id}
          index= {i}
          imgUrl= {images.img_url}
          handleClick={handleClick}
          activeIndex={activeIndex}
          />
        })
      }
    </PhotoGrid>
  )
}

export default ThumbnailGrid