import React from 'react';

const SerpListItem = ({onResultSelect, serpResult, url, resultKey}) => {

  return (
    <li className="list-group-item" onClick={() => onResultSelect(resultKey)}>
      <div className="video-list media">
        <div className="media-body">
          <div>"{serpResult}"</div>
        </div>
      </div>
    </li>
  );
};

export default SerpListItem;
