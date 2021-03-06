import React, { Component } from 'react';
import CostCalculator from './components/Slider';
import logo from './Assets/images/sparesfinder_logo.png';
import headerCurve from './Assets/images/header-curve.svg';
import whiteCurve from './Assets/images/white-curve.svg'
import slack from './Assets/images/icon-slack.svg';
import twitter from './Assets/images/icon-twitter.svg';
import facebook from './Assets/images/icon-facebook.svg';
import telegram from './Assets/images/icon-telegram.svg';
import DataSearch from './Assets/images/Data-Search.png';
import Insight from './Assets/images/Insight.png';
import Gatekeeper from './Assets/images/Gatekeeper.png';
import Masterpiece from './Assets/images/Masterpiece.png';
import dots from './Assets/images/colour-dots.svg';
import {WOW} from 'wowjs/dist/wow';

import './App.css'




class App extends Component {

  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <div className='App'>

          <div className='App-header'>
            <nav>
            <a href='https://sparesfinder.com'><img src={logo} className='App-logo' alt='logo' /></a>
            <p className='social-links'>
              <a href='https://sparesfinder.slack.com' className='social'><img src={slack} className='social-image' alt='Slack' /></a>
              <a href='https://twitter.com/sparesfinder' className='social'><img src={twitter} className='social-image' alt='Twitter' /></a>
              <a href='https://www.facebook.com' className='social'><img src={facebook} className='social-image' alt='Facebook' /></a>
              <a href='https://t.me/joinchat/Ajb2Y0RyndwDiEAO4V-4qQ' className='social'><img src={telegram} className='social-image' alt='Slack' /></a>
            </p>

            </nav>
            <div className='content-heading'>
              <h1>INFORMATION IS POWER</h1>
              <p className='content'>Explore our software solutions for standardising, governing,<br />
              enriching, finding, and leveraging MRO master data across the enterprise.</p>
            </div>
            <img src={headerCurve} className='curve' alt='' />
          </div>

          <div className='App-intro'>
            <section class='how-does-it-work'>
              <div className='container'>
                <h2 className='section-header'>Savings Calculator</h2>
                <p className='section-body'>Find out how much you could save by using sparesFinder</p>
                <CostCalculator />
              </div>
            </section>
          </div>


        <div className='App-body'>
          <img src={whiteCurve} className='whiteCurve' alt='' />
          <section className='product'>
            <div className='container'>
              <p className='content'>sparesFinder offers a range of cloud-based software solutions<br /> designed to build and maintain accurate, accessible,<br /> and reliable spare parts data.</p>
              <div className='divider'></div>

              <div className='features'>
                <div className='feature'>
                  <figure>
                    <a href='https://www.sparesfinder.com/enrich-clean-material-master-data'><img src={Masterpiece} className='Masterpiece' alt='' /></a>
                  </figure>
                  <h5>MASTERPIECE</h5>
                  <span>Standardise & enrich</span>
                </div>
                <div className='feature'>
                  <figure>
                    <a href='https://www.sparesfinder.com/mro-supply-chain-data/'><img src={Insight} className='Insight' alt='' /></a>
                  </figure>
                  <h5>INSIGHT</h5>
                  <span>Aggregate & analyse</span>
                </div>
                <div className='feature' >
                  <figure>
                    <a href='https://www.sparesfinder.com/gatekeeper-material-master-data/'><img src={Gatekeeper} className='Gatekeeper' alt='' /></a>
                  </figure>
                  <h5>GATEKEEPER</h5>
                  <span>Govern & protect</span>
                </div>
                <div className='feature' >
                  <figure>
                    <a href='https://www.sparesfinder.com/find-material-master-data/'><img src={DataSearch} className='DataSearch' alt='' /></a>
                  </figure>
                  <h5>FINDER</h5>
                  <span>Interrogate & leverage</span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    )
  }
}

export default App;
