import React, { Component } from 'react'
import './App.css'
import Search from './Search/Search'
import logo from './assets/logo.png'
import Results from './Search/Results'
import github from '../api/github'
import loader from './assets/loader.svg'

export default class App extends Component {
  state = {
    results: [],
    isLoading: false,
    error: null,
    height: 0,
    searchSubmitted: false
  }

  onSearchSubmit = async (text, stars, license, forked) => {
    const { data } = await github.get(
      `/repositories?q=${text}+stars:${stars}+license:${license}+fork:${forked}`
    )
    try {
      this.setState({
        isLoading: true,
        results: data.items
      })
    } catch (error) {
      this.setState({
        isLoading: true,
        error
      })
    }
    this.setState({ isLoading: false, searchSubmitted: true })
  }

  render () {
    const { results, resultsHeight, isLoading, searchSubmitted } = this.state
    return (
      <div id='App'>
        <div id='container-header'>
          <a href='/'>
            <img src={logo} id='logo' alt='logo' />
          </a>
        </div>
        <div id='container-search'>
          <p className='headline'>Even Financial</p>
          <p className='headline'>Github Repository Search</p>
          <Search onSubmit={this.onSearchSubmit} />
        </div>
        {isLoading && results.length === 0 && <img src={loader} alt='loader' />}
        {searchSubmitted && results.length > 0 && (
          <div id='container-results'>
            <p>SEARCH results:</p>
            {results.map(result => (
              <Results key={result.id} result={result} />
            ))}
          </div>
        )}
        {searchSubmitted && results.length === 0 && (
          <p id='noresults'>No Results Found.</p>
        )}
        {!searchSubmitted && (
          <div id='container-instructions'>
            <p>Please enter query and click SEARCH</p>
            <p>button above, results appear here.</p>
          </div>
        )}
        <div id='container-footer'>
          <footer>&copy; 2017 Even Financial, Inc. - CONFIDENTIAL</footer>
        </div>
      </div>
    )
  }
}
