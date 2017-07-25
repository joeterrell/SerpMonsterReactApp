import React from 'react';

const ResultDetailItem = ({key, serpDate, serpPosition}) => {
  //const serpDate = serpDate;
  //const serpPosition = serpPosition;

  return (
    <div className="details">
      <div className="date"><strong>Date</strong>: {serpDate}</div>
      <div className="position"><strong>Position</strong>: {serpPosition}</div>
    </div>
  );
};

export default ResultDetailItem;
