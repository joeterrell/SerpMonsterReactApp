import React, { Component } from 'react';
import Chart from 'chart.js';

class ResultDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderChart = () => {
    this.destroyActiveChart();
    const SerpTitle = this.props.selectedResultTitle;
    const ChartPlaceholder = document.getElementById("chartPlaceholder");
    if (ChartPlaceholder) {
      const yAxisData = [], xAxisData = [];
      const updateLocalData = this.props.selectedResult.map(function(title, value, index) {
        if (value > 50) {
          yAxisData.push(title.value);
          xAxisData.push(title.title);
        }
      });
      window.activeChart = new Chart(ChartPlaceholder, {
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
          tooltips: {
            enabled: true
          },
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

  destroyActiveChart = () => {
    if (window.activeChart) {
      window.activeChart.destroy();
    }
  }

  render() {
    return (
      <div className="result-detail col-md-9">
        <div id="chartContainer">
          <h2>Search term: "{this.props.selectedResultTitle}"</h2>
          <div id='chartPlaceholderWrapper'>
            <canvas id='chartPlaceholder' width='400' height='400'></canvas>
          </div>
        </div>
      </div>
    );
  }

};

export default ResultDetail;
