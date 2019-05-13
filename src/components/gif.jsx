import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media.giphy.com/media/fSvqyvXn1M3btN8sDh/giphy.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
