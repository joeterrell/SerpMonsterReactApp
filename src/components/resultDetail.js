import React, { Component } from 'react';
import Chart from 'chart.js';

class ResultDetail extends Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate = () => {
    if (!this.props.selectedResult) {
      return <div>Loading...</div>;
    }
    const SerpTitle = this.props.selectedResultTitle;
    const ctx = document.getElementById("myChart");

    const yAxisData = [];
    const xAxisData = [];
    const updateLocalData = this.props.selectedResult.map(function(title, value, index) {
      if (value < 100) {
        yAxisData.push(title.value);
        xAxisData.push(title.title);
      }
    });
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xAxisData,
        datasets: [{
          label: '"' + SerpTitle + '" SERP Progress',
          data: yAxisData,
          backgroundColor: [
            'rgba(48, 160, 243, 0.2)'
          ],
          borderColor: [
            'rgba(48, 160, 243, 1)'
          ],
        borderWidth: 1
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

  componentDidMount = () => {
    if (!this.props.selectedResult) {
      return <div>Loading...</div>;
    }
    const SerpTitle = this.props.selectedResultTitle;
    const ctx = document.getElementById("myChart");

    const yAxisData = [];
    const xAxisData = [];
    const updateLocalData = this.props.selectedResult.map(function(title, value, index) {
      if (value > 100) {
        yAxisData.push(title.value);
        xAxisData.push(title.title);
      }
    });
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xAxisData,
        datasets: [{
          label: '"' + SerpTitle + '" SERP Progress',
          data: yAxisData,
          //backgroundColor: 'rgba(255, 99, 132, 0.8)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 4,
          strokeColor: 'rgba(255,255,255,1)',
          pointColor: 'rgba(50,182,93,1)',
          pointStrokeColor: '#fff',
          scaleFontColor: '#ff0000',
          color: '#ffffff',
          fillColor: '#ffffff',
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
