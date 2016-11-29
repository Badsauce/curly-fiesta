import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoHasPlayed: false,
      explosionHasPlayed: false,
    }
  }
  render() {
    const opts = {
      width: '960',
      height: '540',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
      },
    }

    const video = (
      <div>
        <div className="App-header">
          <h2>This message will self-destruct in 30 seconds</h2>
        </div>
        <p className="App-intro">
          <YouTube
            videoId="3a4fokshU9I"
            opts={opts}
            onEnd={() => {
              this.setState({ videoHasPlayed: true })
              window.setTimeout(() => {this.setState({ explosionHasPlayed: true })}, 1000)
            }}
          />
        </p>
      </div>
  )

    const doc = (
      <div>
        <div className="App-header">
          <h2>Hackathon 007</h2>
          <h3>Add your ideas!</h3>
        </div>
        <iframe
          height="1000px"
          align="middle"
          width="100%"
          border="0"
          src="https://docs.google.com/a/doordash.com/document/d/1CfFPOWArhWr02HvTrEklJWSYWBSE2eYgChiUXbGHOQg/edit?usp=sharing">

        </iframe>
      </div>
      )

    const boom = (
      <div className="explosionContainer">
        <img alt="explosion" className="explosion" src="https://media.giphy.com/media/26uTt2zN11nFuyH1C/giphy.gif"/>
      </div>
    )

    return (
      <div className="App">
        {this.state.videoHasPlayed ? (this.state.explosionHasPlayed ? doc : boom) : video}
      </div>
    );
  }
}

export default App;
