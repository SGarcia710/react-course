import React from 'react';
import './video-player-layout.css'

const videoPlayerLayout = (props) => (
  <div 
    className="VideoPlayer"
    ref={props.setRef}  
  >
    {props.children}
  </div>
)

export default videoPlayerLayout