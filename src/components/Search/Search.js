import React, { Component } from "react";
import License from "../License/License";
import "./Search.scss";
import licenseList from "../../data/licenseList.json";

export default class Search extends Component {
  state = {
    text: "",
    stars: "",
    license: licenseList,
    starsInvalidChars: false,
    starsRangeWrong: false,
    textInvalid: false,
    starsInvalid: false
  };

  onFormSubmit = e => {
    const { text, stars, license, forked } = this.state;
    e.preventDefault();
    if (text) {
      this.setState({ textInvalid: false });
    } else {
      this.setState({ textInvalid: true });
    }
    if (stars) {
      this.setState({ starsInvalid: false });
    } else {
      this.setState({ starsInvalid: true });
    }
    if (stars && text) {
      this.props.onSubmit(
        text,
        stars,
        typeof license === "object" && "mit",
        forked
      );
    }
  };

  onHandleChange = e => {
    if (e.target.name === "forked") {
      this.setState({
        forked: !this.state.forked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    // Call to clear field warnings when typing
    this.inputValidation(e);
  };

  inputValidation(e) {
    if (e.target.value && e.target.name === "text") {
      this.setState({ textInvalid: false });
    }
    if (e.target.value && e.target.name === "stars") {
      this.setState({
        starsInvalid: false,
        starsInvalidChars: false,
        starsRangeWrong: false
      });
    }
  }

  starsValidation(e) {
    const inputCriteria = /^(\d+$)|^(\d+\.{2}\d+$)|^(\d+\.{2}\*$)|^(\*\.{2}\d+$)|^(>|<|>=|<=)\d+$/;
    if (e.target.value) {
      if (e.target.value.match(inputCriteria)) {
        if (e.target.value.includes("..")) {
          if (!isNaN(e.target.value[0]) && !isNaN(e.target.value.slice(-1))) {
            const starsRange = e.target.value.split("..");
            if (Number(starsRange[0]) < Number(starsRange[1])) {
              this.setState({ starsRangeWrong: false });
            } else {
              this.setState({ starsRangeWrong: true });
            }
          }
        }
        this.setState({ starsInvalidChars: false });
      } else {
        this.setState({ starsInvalidChars: true });
      }
    }
  }

  onStarsInputBlur = e => {
    this.starsValidation(e);
  };

  render() {
    const {
      text,
      stars,
      textInvalid,
      starsInvalid,
      starsInvalidChars,
      starsRangeWrong
    } = this.state;
    return (
      <div id="container-fields">
        <form onSubmit={this.onFormSubmit}>
          <div id="repo-name" className="fields">
            <label className="fields-label">Text</label>
            <input
              style={{ border: textInvalid && "1px solid red" }}
              className="text-input"
              placeholder="react"
              name="text"
              type="text"
              value={text}
              onChange={this.onHandleChange}
            />
            {textInvalid && (
              <p className="warning">This input field is not valid.</p>
            )}
          </div>
          <div id="repo-stars" className="fields">
            <label className="fields-label">Stars</label>
            <input
              style={{
                border:
                  starsInvalid || starsInvalidChars || starsRangeWrong
                    ? "1px solid red"
                    : null
              }}
              className="text-input"
              placeholder=">100"
              name="stars"
              type="text"
              value={stars}
              onBlur={this.onStarsInputBlur}
              onChange={this.onHandleChange}
            />
            {starsInvalid && (
              <p className="warning">This input field is not valid.</p>
            )}
            {starsInvalidChars && (
              <p className="warning">Please fix your search criteria.</p>
            )}
            {starsRangeWrong && (
              <p className="warning">
                Stars end range should be larger than the first.
              </p>
            )}
          </div>
          <License
            licenses={licenseList}
            onHandleChange={this.onHandleChange}
          />
          <div id="repo-forked">
            <label htmlFor="forked">
              <input
                onChange={this.onHandleChange}
                type="checkbox"
                id="forked"
                name="forked"
              />
              <span id="repo-forked-checkmark" />
              Include Forked
            </label>
          </div>
          <div id="repo-submit">
            <button type="submit" id="button">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
