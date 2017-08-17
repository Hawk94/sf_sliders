import React, { Component } from "react";
import Slider from 'rc-slider';

import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import './index.css'


import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';


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

  getHandle() {

  }

  render() {
    const { sites, avgValue, dataQuality } = this.state;


    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    const Handle = Slider.Handle;

    const handle = (props) => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          visible={dragging}
          placement="top"
          key={index}
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
      );
    };


    return (
      <div className="calculator">
        <div className="calculator-slider">
          <h3 className='sliderLabel'>
            Sites
          </h3>
          <Slider
            className="slider"
            handle={handle}
            max={100}
            min={0}
            defaultValue={sites}
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
            handle={handle}
            defaultValue={avgValue}
            step={10000}
            max={100000}
            min={0}
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
            handle={handle}
            defaultValue={dataQuality}
            max={10}
            min={0}
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
