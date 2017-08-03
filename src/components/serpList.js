import React from 'react';
import SerpListItem from './serpListItem';

const SerpList = (props) => {
  const SerpItems = props.serpListData.map(function(serpResults) {
    return (
      <SerpListItem
        onResultSelect={props.onResultSelect}
        url={serpResults.serpUrl}
        resultKey={serpResults.key}
        key={serpResults.key}
        serpResult={serpResults.serpKeyword} />
    );
  });

  return (
    <ul className='col-md-3 list-group'>
      {SerpItems}
    </ul>
  );
};

export default SerpList;
