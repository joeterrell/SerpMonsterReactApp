import React, { Component } from 'react';
import SerpListItem from './serpListItem';

class SerpList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localData: props.serpListData,
      selectedComponentKey: null
    };
  }

  handleSerpSelected = (selectedComponentKey) => {
    this.setState({selectedComponentKey: selectedComponentKey});
  }

  renderSerpItems = () => {
    var activeState = false;
    const _this = this;
    const SerpItems = this.state.localData.map(function(serpResults) {
      debugger;
      if (_this.state.selectedComponentKey !== null) {
        activeState = serpResults.key === _this.state.selectedComponentKey
        ? true
        : false;
      }

      return (
        <SerpListItem
          onResultSelect={_this.props.onResultSelect}
          handleSerpSelected={_this.handleSerpSelected}
          url={serpResults.serpUrl}
          resultKey={serpResults.key}
          key={serpResults.key}
          serpResult={serpResults.serpKeyword}
          active={activeState} />
      );
    });

    return SerpItems;
  }

  render() {
    return (
      <ul className='col-md-3 list-group'>
        {this.renderSerpItems()}
      </ul>
    );
  }
};

export default SerpList;
