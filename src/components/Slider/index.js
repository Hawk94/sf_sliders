import React, { Component } from "react";
import Slider from 'rc-slider';
import accounting from 'accounting'
import Tooltip from 'rc-tooltip';
import './index.css'


export default class CostCalculator extends Component {
  state = {
    sites: 28,
    avgValue: 30000,
    dataQuality: 1,
  };

  calculateCost(value, key) {
    const { sites, avgValue, dataQuality } = this.state;
    const DUPLICATION = 0.4 - (dataQuality*0.02)

    const AVOIDANCE = 0.4
    const INVENTORY_TO_BE_SOLD = sites/5

    const totalInventoryValue = sites * avgValue
    const inventoryRationalisation = totalInventoryValue * DUPLICATION
    const purchaseAvoidance = totalInventoryValue * AVOIDANCE
    const saleOfObsoleteItems = totalInventoryValue * INVENTORY_TO_BE_SOLD

    const totalSavings = saleOfObsoleteItems + purchaseAvoidance + inventoryRationalisation

    this.setState({[key]: value,
                   'result': totalSavings})
  }

  render() {
    const { sites, avgValue, dataQuality } = this.state;
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
      <div>
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
            <input type="number" className="number" value={this.state.sites} />
          </div>

          <div className="calculator-slider">
            <h3 className='sliderLabel'>
              Avg. Inventory Value
            </h3>
            <Slider
              className="slider"
              handle={handle}
              defaultValue={avgValue}
              step={1000}
              max={100000}
              min={0}
              onChange={value => {
                this.calculateCost(value, 'avgValue');
              }}
            />
            <input type="number" className="number" value={this.state.avgValue} />
          </div>

          <div className="calculator-slider">
            <h3 className='sliderLabel'>
              Data Quality
            </h3>
              <div className='inside'>
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
                <input type="number" className="number" value={this.state.dataQuality}/>
              </div>
          </div>
        </div>

        <div className='saving'>
          <span>By using sparesFinder's tools to manage your supply chain you could save: </span>
        </div>

        <div className='summary'>
          <span>Total Saving:</span>
          <h4>{accounting.formatMoney(this.state.result)}</h4>
        </div>
      </div>
    );
  }
}
