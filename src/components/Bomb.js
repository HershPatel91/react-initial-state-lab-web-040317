// Bomb Component Code Goes Here
// Bomb Component Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Bomb extends React.Component { 
  constructor(props) {
    super(props);
 
    this.state = {
      secondsLeft: props.initialCount
    }
  }

     render() {
     	if (this.state.secondsLeft === 0){
    return (
      <p>Boom!</p> )
  } else {
  	return (
      <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      )
  }
  }
}

export default Bomb;