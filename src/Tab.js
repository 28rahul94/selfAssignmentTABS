import React, { Component } from "react";
import "./Tab.css";

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      cityNameLight: "",
      otherCityHighlight: "",
      contentAppear: "beforeClick",
      removeContent: ""
    };
  }

  cityData = {
    cityDetails: [
      {
        cityName: "Ranchi",
        msg: "Rich Culture of tribals"
      },
      {
        cityName: "Bangalore",
        msg: "IT HUB of INDIA"
      }
    ]
  };

  // cityDescription({london}){
  //   return(
  //     <h1>{london[1]}</h1>
  //   )

  // }

  changeHandler = (cityInfo, val1, val2) => {
    this.setState({
      city: cityInfo.cityName,
      cityNameLight: val1,
      otherCityHighlight: val2,

      contentAppear: "afterClick",

      removeContent: ""
    });
  };

  spanHandler = () => {
    this.setState({
      removeContent: "removeContent"
    });
  };
  render() {
    const { cityDetails } = this.cityData;

    return (
      <div className="tab">
        <button
          className={this.state.cityNameLight}
          onClick={() =>
            this.changeHandler(cityDetails[0], "buttonHighlighter1", "")
          }
        >
          city name
        </button>

        <button
          className={this.state.otherCityHighlight}
          onClick={() =>
            this.changeHandler(cityDetails[1], "", "buttonHighlighter2")
          }
        >
          other city name
        </button>

        <div className={this.state.contentAppear} id={this.state.removeContent}>
          <span onClick={this.spanHandler}>x</span>
          <h1>{this.state.city}</h1>
        </div>
      </div>
    );
  }
}
export default Tab;
