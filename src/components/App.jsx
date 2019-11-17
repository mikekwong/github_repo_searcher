import React from 'react'
import './App.css'
import Search from './Search/Search'
import logo from './assets/logo.png'

const App = () => {
  return (
    <div id='App'>
      <div id='container-header'>
        <img src={logo} id='logo' alt='logo' />
      </div>
      <div id='container-search'>
        <p className='headline'>Even Financial</p>
        <p className='headline'>Github Repository Search</p>
        <Search />
      </div>
      <div id='container-footer'>
        <footer>&copy; 2017 Even Financial, Inc. - CONFIDENTIAL</footer>
      </div>
    </div>
  )
}

export default App
