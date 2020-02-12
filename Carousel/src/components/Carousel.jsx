import React, { Component } from 'react'
import ThumbnailGallery from './thumbnail-gallery.jsx'
import Modal from './modal.jsx'

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
  }
  this.toggleModal = this.toggleModal.bind(this)
}
toggleModal() {
  this.setState(state => ({
    modal: !state.modal
  }))
}

  render() {
    return(
      <div>
        <ThumbnailGallery />
      </div>

    )
  }
}