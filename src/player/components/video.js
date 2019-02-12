import React, { Component } from 'react';
import './video.css';

class Video extends Component{
  togglePlay() {
    if(this.props.pause){
      this.video.play()
    } else{
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) { //En este momento el this.props tiene false, es decir que es diferente de nextProps.
      this.togglePlay();
    }
  }
  setRef = element => {
    this.video = element;
  }
  render(){
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
    } = this.props;

    return(
      <div className="Video">
        <video
          
          ref={this.setRef}
          autoPlay={this.props.autoplay}
          src={this.props.src}
          onLoadedMetadata={handleLoadedMetadata}//duracion
          onTimeUpdate={handleTimeUpdate}//currenTime
          onSeeking={handleSeeking} //me estoy moviendo
          onSeeked={handleSeeked} //ya me movi
        />
      </div>
    )
  }
}

export default Video;