import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
      drawChromeBoiAtCoords(event.clientX, event.clientY)   /* 1. invoking the methout within 'handleMouseMove' */
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */


    handleClick = (event) => {
      if (event.key === 'a') {   /* 4. when 'a' is pressed 'resize' invokes '+' */ 
        resize('+')
      }
      else if (event.key === 's') {   /* 5. when 's' is pressed 'resize' invokes '-' */ 
        resize('-')
      }
    }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick = {() =>toggleCycling()} /* 2. Event listener for click that triggers 'toggleCycling' */
        onKeyDown = {this.handleClick} /* 3. event listener for resizing with function handleClick */ 
        >
      </canvas>
    )
  }
}
