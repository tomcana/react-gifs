import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     gifs: [
  //       { id: "fSvqyvXn1M3btN8sDh"},
  //       { id: "fSvqyvXn1M3btN8sDh"}
  //     ],
  //     selectedGifId: "fSvqyvXn1M3btN8sDh"
  //   }
  // }
  render() {
    const gifs =  [
      { id: "fSvqyvXn1M3btN8sDh"},
      { id: "fSvqyvXn1M3btN8sDh"}
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="fSvqyvXn1M3btN8sDh" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
