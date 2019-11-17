import React, { Component } from 'react'
import './App.css'
import Search from './Search/Search'
import logo from './assets/logo.png'
import Results from './Search/Results'
import github from '../api/github'

export default class App extends Component {
  state = {
    results: []
  }

  onSearchSubmit = async (text, stars, license, forked) => {
    try {
      const { data } = await github.get(
        `?q=${text}+${license}+stars:${stars}&forked=${forked}`
      )
      this.setState({
        results: data.results,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  render () {
    const { results } = this.state
    return (
      <div id='App'>
        <div id='container-header'>
          <img src={logo} id='logo' alt='logo' />
        </div>
        <div id='container-search'>
          <p className='headline'>Even Financial</p>
          <p className='headline'>Github Repository Search</p>
          <Search onSubmit={this.onSearchSubmit} />
        </div>
        {results.length ? (
          <div id='container-results'>
            <p>Results:</p>
            results.map(result => {<Results />})
          </div>
        ) : (
          <div id='container-footer'>
            <footer>&copy; 2017 Even Financial, Inc. - CONFIDENTIAL</footer>
          </div>
        )}
      </div>
    )
  }
}
