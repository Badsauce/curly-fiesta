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
        videoId="QO5WZMyvNoY"
        opts={opts}
        onEnd={() => {
          this.setState({ videoHasPlayed: true })
        }}
      />
    </p>)

    const form = (<iframe src="https://docs.google.com/a/doordash.com/forms/d/e/1FAIpQLSfaj1OyDq63aad7OVQRDgMgXWSh9pWZJ8zlr2NHa9J0WQUDig/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>)

    return (
      <div className="App">
        <div className="App-header">
          <h2>D007Dash</h2>
        </div>
        {this.state.videoHasPlayed ? form : video}
      </div>
    );
  }
}

export default App;
