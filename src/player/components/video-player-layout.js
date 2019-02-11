import React from 'react';
import './video-player-layout.css'

const videoPlayerLayout = (props) => (
  <div className="VideoPlayer">
    {props.children}
  </div>
)

export default videoPlayerLayout