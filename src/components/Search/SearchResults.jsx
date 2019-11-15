import React, { Component } from "react";
import github from "../../api/github";

export default class SearchResults extends Component {
  state = {
    repos: []
  };

  fetchRepos = async id => {
    try {
      const { data } = await github.get(`/`);
      this.setState({ repos: data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return <div></div>;
  }
}
