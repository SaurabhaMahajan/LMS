import React from "react";
import "./BarChartComponent.scss";
import Chart from "chart.js";

class BarChartComponent extends React.Component {
  chart = null;

  constructor(props) {
    super(props);
    this.state = {
      chart : null
    }
  }

  componentDidMount() {
    this.configureChart(this.props.data);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.data !== this.props.data) {
  //     this.configureChart(this.props.data);
  //   }
  // }

  componentDidUpdate () {
    let chart = this.state.chart;
    let data = this.props.data;
    let dataArr = [];
    let labelsArr = [];
    data &&
      data.map((item) => {
        dataArr.push(((item.topic_score/item.topic_max_score) * 100).toFixed(2));
        labelsArr.push(item.topic_name);
      });
   chart.data.datasets[0].data = dataArr;
    chart.data.labels = labelsArr;
    chart.update();
}

  configureChart = (data) => {
    let dataArr = [];
    let labelsArr = [];
    data &&
      data.map((item) => {
        dataArr.push(((item.topic_score/item.topic_max_score) * 100).toFixed(2));
        labelsArr.push(item.topic_name);
      });

    let mixedChart = new Chart(this.chart, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "",
            data: dataArr,
            type: "bar",
            backgroundColor: "rgb(0, 178, 255)",
          },
        ],
        labels: labelsArr,
      },
      options: {
        layout: {
          padding: {
            left: window.innerWidth > 768 ? 100 : 20,
            right: window.innerWidth > 768 ? 100 : 20,
            top: 20,
            bottom: 0,
          },
        },

        elements: {
          line: {
            tension: 0.000001,
          },
        },
        tooltips: {
          displayColors: false,
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            display: false,
            fontColor: "#000",
          },
        },
        scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "மதிப்பெண் %"
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              stacked: true,
              barThickness: 35,
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 10
              },
            },
          ],
        },
      },
    });
    this.setState({chart: mixedChart});
  };

  render() {
    return (
      <div>
        <canvas
          ref={(chart) => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}

export default BarChartComponent;
