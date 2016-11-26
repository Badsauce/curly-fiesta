import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoHasPlayed: false,
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

    const video = (<p className="App-intro">
      <YouTube
        videoId="HC5W2licpew"
        opts={opts}
        onEnd={() => {
          this.setState({ videoHasPlayed: true })
        }}
      />
    </p>)

    const doc = (
      <div className="App-header">
        <h2>D007Dash</h2>
        <h3>Add your ideas!!!!!!!!!!!</h3>
        <iframe
          height="620"
          align="middle"
          width="90%"
          border="0"
          src="https://docs.google.com/a/doordash.com/document/d/1CfFPOWArhWr02HvTrEklJWSYWBSE2eYgChiUXbGHOQg/edit?usp=sharing">

        </iframe>
      </div>
      )

    return (
      <div className="App">
        {this.state.videoHasPlayed ? doc : video}
      </div>
    );
  }
}

export default App;
