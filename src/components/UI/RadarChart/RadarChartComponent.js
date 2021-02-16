import React, { Component } from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./RadarChartComponent.scss";

// const data = {
//   radarData: [
//     {
//       data: {
//         gk: 0.7,
//         decision: 0.8,
//         analytics: 0.5,
//         proficiency: 0.9,
//       },
//       meta: { color: "#00B2FF" },
//     },
//   ],
//   radarCaptions: {
//     gk: "General Knowledge",
//     decision: "Decision Making",
//     analytics: "Analytical Skills",
//     proficiency: "Proficiency",
//   }
// }
class RadarChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    let obj = {};
    let radarCaptions = {};
    this.props.data &&
      this.props.data.map((topic) => {
        radarCaptions[topic.topic_name.replace(" ", "")] = topic.topic_name;
        obj[topic.topic_name.replace(" ", "")] = topic.topic_score / topic.topic_max_score;
      });
    let radarData = [
      {
        data: obj,
        meta: { color: "#00B2FF" },
      },
    ];

    const data = {
      radarData,
      radarCaptions,
    };


    return (
      <div className="radar-chart-container">
        <RadarChart
          captions={data.radarCaptions}
          data={data.radarData}
          size={this.props.size}
          options={{
            scales: this.props.scales,
            // scaleProps: () => ({
            //   fill: '#FAFAFA',
            //   stroke: '#999',
            //   strokeWidth: '.5'
            // }),
            axes: true,
            axisProps: () => ({
              stroke: '#555',
              strokWidth: '.6'
            }),
            captions: true,
            dots: true,
            dotProps: () => ({
              className: 'dot',
              mouseEnter: this.handleToolTip
            }),
            captionProps: () => ({
              className: `radar-caption`,
              textAnchor: "middle",
              fontSize: (this.props.size * 14) / 400,
              fontFamily: "mukta-bold",
            }),
          }}
        />
      </div>
    );
  }
}

export default RadarChartComponent;
