import React from 'react';
import { render, shallow } from 'enzyme';
import Thumbnail from '../src/components/thumbnail-gallery.jsx';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe('thumbnail-gallery', () => {
  test('should have a state', () => {
    const newThumbnailState = new Thumbnail();
    const currentThumbnailState = {
      images: [],
      activeIndex: 0,
      modal: false
    };
    expect(newThumbnailState.state).toEqual(currentThumbnailState);
  })
})