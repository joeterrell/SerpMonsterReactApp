import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResultDetail from './components/resultDetail';
import SerpList from './components/serpList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedResult: this.fetchDetailedResult(),
      serpListData: this.fetchSERPList(),
      localSerpData: false
    };
  }

  fetchDetailedResult(key) {
    if (!key) {
      key = 0;
    }
    const serpData = require('../data/serp-results-data.json');
    return serpData.serpResults[key];
  }

  fetchSERPList() {
    return require('../data/serpList.json');
  }

  updateDetailedResult(selectedResultKey) {
    const newResult = this.fetchDetailedResult(selectedResultKey);
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
