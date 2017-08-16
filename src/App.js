import React, { Component } from 'react';
import logo from './Assets/images/sparesfinder_logo.png';
import headerCurve from './Assets/images/header-curve.svg'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>

          <div className='App-header'>
            <nav>
              <img src={logo} className='App-logo' alt='logo' />
            </nav>
            <div className='content'>
              <h1>INFORMATION IS POWER</h1>
            </div>
            <img src={headerCurve} className='curve' alt='' />
          </div>

        <div className='App-intro'>
          <section class='product'>
            <div class='container'>
              <h2 class='section-header'>Our goal is to make it easy and fun to invest in a diverse basket of digital currencies, such as Bitcoin and Ethereum.</h2>
              <div class='divider light'></div>

              <div class='features'>
                <div class='feature wow fadeInUp'>
                  <figure>
                    <img src='./Assets/feature-icon-1.svg' alt='' />
                  </figure>
                  <h4>Connect your card</h4>
                  <p>Securely link Dust with your existing current account or cash card. Dust is compatible with most high street banks.</p>
                </div>
                <div class='feature wow fadeInUp'>
                  <figure>
                    <img src='./Assets/feature-icon-2.svg' alt='' />
                  </figure>
                  <h4>Decide your split</h4>
                  <p>Choose where you'd like your dust to collect. All in on Bitcoin? Or spread evenly across a basket?</p>
                </div>
                <div class='feature wow fadeInUp' >
                  <figure>
                    <img src='./Assets/feature-icon-3.svg' alt='' />
                  </figure>
                  <h4>Invest as you spend</h4>
                  <p>Dust collects passively from your normal spending. Set your own limits, and snooze Dust at any time.</p>
                </div>
              </div>
            </div>
            <img src='./Assets/images/colour-dots.png' alt='' class='dots' />
          </section>
        </div>

      </div>
    )
  }
}

export default App;
