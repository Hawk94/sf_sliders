import React, { Component } from 'react';
import logo from './sparesfinder_logo.png';
import twitterLogo from './images/icon-twitter.svg'
import telegramLogo from './images/icon-telegram.svg'
import facebookLogo from './images/icon-facebook.svg'
import headerCurve from './images/header-curve.svg'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
          <div className='App-header'>
            <nav>
              <img src={logo} className='App-logo' alt='logo' />
            </nav>
            <img src={headerCurve} className='curve' alt='' />
          </div>
        <div className='App-intro'>
        </div>
      </div>
    )
  }
}

export default App;
