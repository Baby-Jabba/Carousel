import React from 'react';
import RGalleryThumbnail from './rightGallery-thumbnail.jsx';
import {
  RPhotoGrid,
  RPhoto
} from '../CSS/thumbnail-galleryCSS.js'
const RGalleryGrid = () => {
  return (
    <RPhotoGrid>
      {/* <RGalleryThumbnail /> */}
      <div css={{backgroundImage: 'url("https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805")', height: '33%',
  width: '97%', backgroundSize: 'cover', filter: 'brightness(50%)'}}></div>
      <div css={{backgroundImage: 'url("https://vignette.wikia.nocookie.net/starwarsrebels/images/7/70/SWR_Tatooine.png/revision/latest?cb=20170318142122")', height: '33%',
  width: '97%', backgroundSize: 'cover', filter: 'brightness(50%)'}}></div>
      <div css={{backgroundImage: 'url("https://image.cnbcfm.com/api/v1/image/105938360-1559145059868falconcropped.jpg?v=1559222342&w=678&h=381")', height: '33%',
  width: '97%', backgroundSize: 'cover', filter: 'brightness(50%)'}}></div>
    </RPhotoGrid>
  )
}



export default RGalleryGrid;