import React from 'react';
import ResultDetailItem from './resultDetailItem';

const ResultDetail = ({selectedResult, selectedResultTitle}) => {
  if (!selectedResult) {
    return <div>Loading...</div>;
  }

  const SerpTitle = selectedResultTitle;
  const SerpPositionData = selectedResult.map(function(title, value, index) {
    if (value < 100) {
      return (
        <ResultDetailItem
          key={value}
          serpDate={title.title}
          serpPosition={title.value} />
      );
    }
  });

  return (
    <div className="video-detail col-md-8">
      <div className="">
        <h2>Search term: "{SerpTitle}"</h2>
        {SerpPositionData}
      </div>
    </div>
  );
};

export default ResultDetail;
