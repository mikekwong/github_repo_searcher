import React, { Component } from "react";
import License from "./License";

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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input
              className="text-input"
              placeholder="Repository name"
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <input
              className="stars-input"
              placeholder="stars amount"
              type="text"
              value={this.state.stars}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <select name="license">
              <License />
            </select>
          </div>
        </form>
      </div>
    );
  }
}
