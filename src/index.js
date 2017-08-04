import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResultDetail from './components/resultDetail';
import SerpList from './components/serpList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localSerpData: false,
      cachedResultsData: null,
      selectedResult: this.fetchDetailedResult(),
      serpListData: this.fetchSERPList()
    };
  }

  fetchDetailedResult = (key) => {
    let serpData = require('../data/serp-results-data.json');
    if (!key) {
      key = 0;
    }
    return serpData.serpResults[key];
  }

  fetchSERPList = () => {
    return require('../data/serpList.json');
  }

  updateDetailedResult = (selectedResultKey) => {
    let newResult = this.fetchDetailedResult(selectedResultKey);
    this.setState({selectedResult: newResult});
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='row'>
          <div className='col-md-12'>
            <ResultDetail
              selectedResult={this.state.selectedResult.datasequences[0].datapoints}
              selectedResultTitle={this.state.selectedResult.title} />
            <SerpList
              onResultSelect={selectedResultKey => this.updateDetailedResult(selectedResultKey)}
              serpListData={this.state.serpListData.serpList} />
          </div>
        </div>
        <div className='row'>
          <div className='footer col-md-12'>
            <p>SERP monster is a React powered SERP data visualation app by Clear Desire. For more information on Clear Desire please visit our <a href="http://www.cleardesire.co.uk">website.</a></p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
