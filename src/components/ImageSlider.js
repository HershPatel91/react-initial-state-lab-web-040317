// Bomb Component Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class ImageSlider extends React.Component { 
  constructor() {
    super();
 
    this.state = {
      currentSlideIndex: 0
    }
  }

     render() {
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    );
  }
}

export default ImageSlider;
