import React, { Component } from 'react';
import Chart from 'chart.js';

class ResultDetail extends Component {
  constructor(props) {
    super(props);

  }

  renderChart = () => {
    const SerpTitle = this.props.selectedResultTitle;
    const ChartElement = document.getElementById("myChart");
    const yAxisData = [], xAxisData = [];
    const updateLocalData = this.props.selectedResult.map(function(title, value, index) {
      if (value > 50) {
        yAxisData.push(title.value);
        xAxisData.push(title.title);
      }
    });
    const myChart = new Chart(ChartElement, {
      type: 'line',
      data: {
        labels: xAxisData,
        datasets: [{
          label: '"' + SerpTitle + '" SERP Progress',
          data: yAxisData,
          backgroundColor: 'rgba(239, 4, 13, 0.2)',
          borderColor: 'rgb(239, 4, 13)'
      }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  componentDidUpdate = () => {
    this.renderChart();
  }

  componentDidMount = () => {
    if (!this.props.selectedResult) {
      return <div>Loading...</div>;
    }
    this.renderChart();
  }

  render() {
    return (
      <div className="result-detail col-md-9">
        <div className="">
          <h2>Search term: "{this.props.selectedResultTitle}"</h2>
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    );
  }

};

export default ResultDetail;
