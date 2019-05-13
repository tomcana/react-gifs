import React, { Component } from 'react';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} />
        })}
      </div>
    );
  }
}

export default GifList;
