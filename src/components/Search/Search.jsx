import React, { Component } from "react";
import License from "./License";
import "./Search.css";

export default class Search extends Component {
  state = {
    text: "",
    stars: "",
    license: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div id="fields">
        <form onSubmit={this.onFormSubmit}>
          <div id="repo-name">
            <input
              className="text-input"
              placeholder="name"
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
          <div id="repo-stars">
            <input
              className="text-input"
              placeholder="stars"
              type="text"
              value={this.state.stars}
              onChange={this.onInputChange}
            />
          </div>
          <div id="repo-license">
            <select name="license">
              <License />
            </select>
          </div>
          <div id="repo-forked">
            <label htmlFor="forked">
              <input type="checkbox" id="forked" name="forked" />
              <span id="repo-forked-checkmark" />
              Include Forked
            </label>
          </div>
        </form>
      </div>
    );
  }
}
