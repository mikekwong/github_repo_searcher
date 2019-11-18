import React, { Component } from 'react'
import './App.css'
import Search from './Search/Search'
import logo from './assets/logo.png'
import Results from './Search/Results'
import github from '../api/github'

export default class App extends Component {
  state = {
    results: [],
    isLoading: true
  }

  onSearchSubmit = async (text, stars, licenses, forked) => {
    try {
      // const { data } = await github.get(
      //   `/repositories?q=${text}+${license}+stars:${stars}&fork=${forked}`
      // )
      const { data } = await github.get(
        `/repositories?q=${text}+stars:${stars}&fork=${forked}`
      )
      this.setState({
        results: data.items,
        isLoading: false
      })
      console.log(this.state.results)
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  render () {
    const { results, isLoading } = this.state
    console.log(results)
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
        {!isLoading && results.length ? (
          // <div id='container-results'>
          <>
            <p>Results:</p>
            {results.map(result => (
              <Results result={result} />
            ))}
          </>
        ) : (
          // </div>
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
