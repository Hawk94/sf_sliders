import React, { Component } from "react";
import Slider from 'rc-slider';
import NumericInput from 'react-numeric-input';

import './index.css'


import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';


export default class CostCalculator extends Component {
  state = {
    sites: 28,
    avgValue: 30000,
    dataQuality: 1,
  };

  calculateCost(value, key) {
    this.state[key] = value
    const { sites, avgValue, dataQuality, result } = this.state;
    const DUPLICATION = 0.2 - (dataQuality*0.02)

    const AVOIDANCE = 0.15
    const INVENTORY_TO_BE_SOLD = 0.1

    const totalInventoryValue = sites * avgValue
    const inventoryRationalisation = totalInventoryValue * DUPLICATION
    const purchaseAvoidance = totalInventoryValue * AVOIDANCE
    const saleOfObsoleteItems = totalInventoryValue * INVENTORY_TO_BE_SOLD

    const totalSavings = saleOfObsoleteItems + purchaseAvoidance + inventoryRationalisation

    this.state.result = totalSavings
    this.forceUpdate()
  }

  render() {
    const { sites, avgValue, dataQuality } = this.state;


    const createSliderWithTooltip = Slider.createSliderWithTooltip;
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

        <div className="calculator-slider">
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

        <div className="calculator-slider">
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
        <span>Saving: {this.state.result}</span>
        </div>

      </div>
    );
  }
}
