import React, { Component } from 'react'
import './App.css'
import Search from './Search/Search'
import Loader from './Search/Loader'
import logo from './assets/logo.png'
import Results from './Search/Results'
import github from '../api/github'
export default class App extends Component {
  state = {
    results: [],
    isLoading: true,
    error: null,
    searchSubmitted: false,
    noResults: false
  }

  onSearchSubmit = async (text, stars, license, forked) => {
    // Reset these states in case a new search is submitted after existing one
    this.setState({ searchSubmitted: true, error: null, noResults: false })
    try {
      const { data } = await github.get(
        `/repositories?q=${text}+stars:${stars}+license:${license}+fork:${forked}`
      )
      this.setState({
        results: data.items,
        isLoading: false
      })
      if (data.items.length === 0) {
        this.setState({ noResults: true })
      } else {
        this.setState({ noResults: false })
      }
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
    // Return to normal states to signify search has finished
    this.setState({ isLoading: true, searchSubmitted: false })
  }

  render () {
    const { results, isLoading, searchSubmitted, error, noResults } = this.state

    let searchContent
    if (searchSubmitted && isLoading) {
      searchContent = <Loader />
    } else {
      searchContent = (
        <div id='container-results'>
          <p>SEARCH results:</p>
          {results.map(result => (
            <Results key={result.id} result={result} />
          ))}
        </div>
      )
    }

    return (
      <div id='App'>
        <div id='container-header'>
          <a href='/'>
            <img src={logo} id='logo' alt='logo' />
          </a>
        </div>
        <div id='container-search'>
          <p id='headline'>
            Even Financial <span>Github Repository Search</span>
          </p>
          <Search onSubmit={this.onSearchSubmit} />
        </div>
        <div id='line' />
        {searchContent}
        {noResults && <p id='noresults'>No Results Found.</p>}
        {error && <p id='error'>{error.response.data.errors[0].message}</p>}
        {!error && !searchSubmitted && (
          <div id='container-instructions'>
            <p>
              Please enter query and click SEARCH{' '}
              <span>button above, results appear here.</span>
            </p>
          </div>
        )}
        <div id='container-footer'>
          <footer>&copy; 2017 Even Financial, Inc. - CONFIDENTIAL</footer>
        </div>
      </div>
    )
  }
}
