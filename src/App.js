import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';

class App extends Component {
  render() {
    const opts = {
      width: '960',
      height: '540',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
      },
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>D007Dash</h2>
        </div>
        <p className="App-intro">
          <YouTube
            videoId="QO5WZMyvNoY"
            opts={opts}
            onEnd={() => {alert('Done!')}}
          />
        </p>
      </div>
    );
  }
}

export default App;
