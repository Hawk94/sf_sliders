import React, { Component } from "react";
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './index.css'

export default class CostCalculator extends Component {
  state = {
    sites: 28,
    avgValue: 30000,
    dataQuality: 1
  };

  calculateCost(value, key) {
    const { sites, avgValue, dataQuality } = this.state;
    return 0
  }

  render() {
    const { sites, avgValue, dataQuality } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-slider">
          <h3 className='sliderLabel'>
            Sites
          </h3>
          <Slider
            className="slider"
            onChange={value => {
              this.calculateCost(value, 'sites');
            }}
          />
        </div>

        <div className="calculator">
          <h3 className='sliderLabel'>
            Avg. Inventory Value
          </h3>
          <Slider
            className="slider"
            onChange={value => {
              this.calculateCost(value, 'avgValue');
            }}
          />
        </div>

        <div className="calculator">
          <h3 className='sliderLabel'>
            Data Quality
          </h3>
          <Slider
            className="slider"
            onChange={value => {
              this.calculateCost(value, "dataQuality");
            }}
          />
        </div>

        <div className='summary'>
        <span>Result goes here!</span>
        </div>

      </div>
    );
  }
}
