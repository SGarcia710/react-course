import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';


import { formatedTime } from '../../helper';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class VideoPlayer extends Component {
  state = {
    pause: false,//false
    duration: 0,
    currentTime: 0,
    progressBarDuration: 0,
    progressBarCurrentTime: 0,
    loading: false,
    mute: false
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: formatedTime(this.video.duration),
      progressBarDuration: this.video.duration
    });
  }
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      currentTime: formatedTime(this.video.currentTime),
      progressBarCurrentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {//aca mi componente empieza a cargar
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {//aca mi componente deja de cargar
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.volActual = event.target.value
    console.log(this.video.volume)
  }
  toggleVolume = event => {//Solo pone el mute siempre y cuando no se haya tocado el input.
    // this.volActual = this.volActual ? this.volActual : this.video.volume
    if (!this.state.mute){
      this.video.volume = 0
      this.setState({
        mute: true
      })
    }else{
      this.setState({
        mute: false
      })
      this.video.volume = 1
    }
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un Video chido!"
        />
        <Controls>
          <PlayPause
            pause={!this.state.pause}//El playPause llega pausado.
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar 
            progressBarDuration={this.state.progressBarDuration}
            progressBarCurrentTime={this.state.progressBarCurrentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeClick={this.toggleVolume}
            handleVolumeChange={this.handleVolumeChange}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          autoplay={!this.props.autoplay}//Aca desactivo el autoplay.
          pause={!this.state.pause}//El video llega pausado
          mute={this.state.mute}//mando el video sin mute
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;