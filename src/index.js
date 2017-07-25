import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import ResultDetail from './components/resultDetail';
//import VideoList from './components/videoList';
//const API_KEY = 'AIzaSyBv1-5Quornp1wm2h9K241OSLRrjcgkP48';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //selectedVideo: null,
      results: this.fetchSERPResults()
    };

    //this.videoSearch('drifting');
  }

  fetchSERPResults() {
    return require('../data/JSONStub.json');
  }

  render() {
    //const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div className='grid-container'>
        <SearchBar />
        <ResultDetail serpResults={this.state.results.graph.datasequences[0].datapoints} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
