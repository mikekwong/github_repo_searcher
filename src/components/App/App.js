import React, { Component } from "react";
import "./App.scss";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Loader from "../Loader/Loader";
import Results from "../Results/Results";
import github from "../../api/github";

export default class App extends Component {
  state = {
    results: [],
    isLoading: true,
    error: null,
    searchSubmitted: false,
    noResults: false,
  };

  onSearchSubmit = async (text, stars, license, forked) => {
    // Reset these states in case a new search is submitted after existing one
    this.setState({ searchSubmitted: true, error: null, noResults: false });
    // Necessary if user hasn't changed the default license option
    if (typeof license === "object") {
      license = "mit";
    }

    try {
      const { data } = await github.get(
        `/repositories?q=${text}+stars:${stars}+license:${license}+fork:${forked}`
      );
      this.setState({
        results: data.items,
        isLoading: false,
      });
      if (data.items.length === 0) {
        this.setState({ noResults: true });
      } else {
        this.setState({ noResults: false });
      }
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
    // Return to normal states to signify search has finished
    this.setState({ isLoading: true, searchSubmitted: false });
  };

  render() {
    const {
      results,
      isLoading,
      searchSubmitted,
      error,
      noResults,
    } = this.state;

    return (
      <div id="App">
        <Header />
        <div id="container-search">
          <p id="headline">
            Even Financial <span>Github Repository Search</span>
          </p>
          <Search
            searchSubmitted={searchSubmitted}
            isLoading={isLoading}
            onSubmit={this.onSearchSubmit}
          />
        </div>
        <div id="line" />
        {!searchSubmitted && results.length > 0 && (
          <div id="container-results">
            <p>SEARCH results:</p>
            {results.map(result => (
              <Results key={result.id} result={result} />
            ))}
          </div>
        )}
        {searchSubmitted && <Loader />}
        {noResults && <p id="noresults">No Results Found.</p>}
        {error && <p id="error">{error.response.data.errors[0].message}</p>}
        {!error && !searchSubmitted && results.length === 0 && !noResults && (
          <div id="container-instructions">
            <p>
              Please enter query and click SEARCH{" "}
              <span>button above, results appear here.</span>
            </p>
          </div>
        )}
        <div id="container-footer">
          <footer>&copy; 2017 Even Financial, Inc. - CONFIDENTIAL</footer>
        </div>
      </div>
    );
  }
}
