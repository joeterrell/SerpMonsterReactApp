import React, { Component } from 'react';

class SerpListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  };

  toggleActive() {
    this.setState({active: !this.state.active});
  }

  render() {
    return (
      <li
        className="list-group-item"
        data-active={this.props.active}
        onClick={() => {
          this.props.onResultSelect(this.props.resultKey)
          this.props.handleSerpSelected(this.props.resultKey)
        }
      }>
        <div className="video-list media">
          <div className="media-body">
            <div>"{this.props.serpResult}"</div>
          </div>
        </div>
      </li>
    );
  }
};

export default SerpListItem;
