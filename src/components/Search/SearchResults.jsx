import React, { Component } from "react";
import github from "../../api/github";

export default class SearchResults extends Component {
  state = {
    repos: [],
    isLoading: true,
    error: null
  };

  async fetchRepos(id) {
    const { data } = await github.get(`/`);
    try {
      this.setState({ repos: data, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    return <div></div>;
  }
}
