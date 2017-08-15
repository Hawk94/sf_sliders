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
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <header>
            <nav>
              <a href='#' class='join signup'>Join alpha</a>
              <a href='https://twitter.com/dustcrypto' class='social'><img src={twitterLogo} alt='Twitter' /></a>
              <a href='https://www.facebook.com/Dust-108192633212782/' class='social'><img src={facebookLogo} alt='Facebook' /></a>
              <a href='https://t.me/dustapp' class='social'><img src={telegramLogo} alt='Telegram' /></a>
            </nav>
            <div class='curve'><img src={headerCurve} alt='' /></div>
          </header>
        <p className='App-intro'>
          Information is power
        </p>
      </div>
    )
  }
}

export default App;
