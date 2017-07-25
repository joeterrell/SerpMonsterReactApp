import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
      <h1>SERP Monster</h1>
      <p>SERP monster is a React powered SERP data visualation app by Clear Desire. For more information on Clear Desire please visit our <a href="http://www.cleardesire.co.uk">website.</a></p>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

//<input
//value={this.state.term}
//onChange={event => this.onInputChange(event.target.value)} />
