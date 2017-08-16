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
            <div className="content">
              <h1>INFORMATION IS POWER</h1>
            </div>
            <img src={headerCurve} className='curve' alt='' />
          </div>
        <div className='App-intro'>
        <p> Some Text </p>
        </div>
      </div>
    )
  }
}

export default App;
