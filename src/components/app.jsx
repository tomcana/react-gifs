import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import GifList from './gif_list.jsx';
import Gif from './gif.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "fSvqyvXn1M3btN8sDh"
    }
    this.search("pokemon");
  }

  search = (query) => {
    // TODO: API call
    giphy('pwkT2VZdAhNZ75OaHsxE5XWzBhgYOxGO').search({
      q: query,
        rating: 'g',
        limit: 10
    }, (error, result) => {
        // Res contains gif data
        this.setState({
          gifs: result.data
        });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs =  [
      { id: "fSvqyvXn1M3btN8sDh"},
      { id: "fSvqyvXn1M3btN8sDh"}
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
