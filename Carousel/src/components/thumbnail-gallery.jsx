import React, { Component } from 'react';
import ThumbnailGrid from './thumbnail-grid.jsx';
import ThumbnailMain from './thumbnail-main.jsx';
import RGalleryGrid from './rightGalleryGrid.jsx';
import Modal from './modal.jsx';
// import RightThumbnail from './rightGallery-thumbnail.jsx';


import {
  PhotoGallery,
  LeftContainer,
  RightContainer,
} from '../CSS/thumbnail-galleryCSS.js'


export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeIndex: 0,
      modal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLeftChevron = this.handleLeftChevron.bind(this);
    this.handleRightChevron = this.handleRightChevron.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];
    fetch(`/api/carousel/${id}`)
    .then((data) => {
      data = data.json();
      console.log(data);
      return data;
    })
    .then((data) => {
      console.log(data)
      this.setState( {images: data} )
    })
  }

  handleClick(e) {
    const newActiveIndex = e.target.getAttribute('data-index')
    this.setState({activeIndex:newActiveIndex})
  }

  handleLeftChevron() {
    const {activeIndex} = this.state
    let i;
    if (Number(activeIndex) === 0) {
      i = 19;
    } else {
      i = Number(activeIndex) - 1;
    }
    this.setState({activeIndex: i});
  }

  handleRightChevron() {
    const {activeIndex} = this.state
    let i;
    if (Number(activeIndex) === 19) {
      i = 0;
    } else {
      i = Number(activeIndex) + 1;
    }
    this.setState({activeIndex: i});
  }

  toggleModal() {
    this.setState(state => ({
      modal: !state.modal
    }))
  }

  renderThumbnails() {
    const { images, activeIndex } = this.state
    if (images.length) {
      return (
        <ThumbnailMain toggleModal={this.toggleModal} handleLeftChevron={this.handleLeftChevron} handleRightChevron={this.handleRightChevron} activeThumbnail= {images[activeIndex]}></ThumbnailMain>
      )
    }
  }




  render() {
    const { images, activeIndex} = this.state
    return(
      <div>
        {this.state.modal && <Modal activeThumbnail={images[activeIndex]} handleLeftChevron={this.handleLeftChevron} handleRightChevron={this.handleRightChevron} toggleModal={this.toggleModal}/>}
      <PhotoGallery>



        {/* Left Side */}
        <LeftContainer>

          {this.renderThumbnails()}




          <ThumbnailGrid
          images={images}
          handleClick={this.handleClick}
          activeIndex={Number(this.state.activeIndex)}
          />
        </LeftContainer>

        {/* Right Side */}
        <RightContainer>
          <RGalleryGrid />
        </RightContainer>
      </PhotoGallery>
      </div>
    )
  }
}

const thumbnailGalleryStyles = {
  background: '#ddd',
  height: '521px',
  width: '750px',
  margin: '40px auto',
  display: 'flex'
}