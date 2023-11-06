/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import USAMap from "react-usa-map";
 
class Map extends Component {
  /* mandatory */
  mapHandler = (event: any) => {
    alert(event.target.dataset.name);
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event: any) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };
 
  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;