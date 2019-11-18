import React, { Component } from 'react'
import License from './License'
import './Search.css'
import licenseList from '../../api/licenseList.json'

export default class Search extends Component {
  state = {
    text: '',
    stars: '',
    license: licenseList,
    forked: false,
    starsInvalid: false
  }

  onFormSubmit = e => {
    const { text, stars, license, forked } = this.state
    e.preventDefault()
    this.props.onSubmit(text, stars, license, forked)
  }

  onHandleChange = e => {
    if (e.target.name === 'forked') {
      this.setState({
        forked: !this.state.forked
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  onStarsInputBlur = e => {
    const inputCriteria = /^(\d+$)|(\d+\..\d+$)|(\d+\..\*$)|(>|<|>=|<=|\*..|\..)\d+$/
    if (e.target.value) {
      if (!e.target.value.match(inputCriteria)) {
        this.setState({ starsInvalid: true })
      } else {
        this.setState({ starsInvalid: false })
      }
    }
  }

  render() {
    const { text, stars, license, forked, starsInvalid } = this.state
    return (
      <div id='fields'>
        <form onSubmit={this.onFormSubmit}>
          <div id='repo-name' className='fields-input'>
            <label className='fields-label'>Text</label>
            <input
              className='text-input'
              placeholder='name'
              name='text'
              type='text'
              value={text}
              onChange={this.onHandleChange}
            />
          </div>
          <div id='repo-stars' className='fields-input'>
            <label className='fields-label'>Stars</label>
            <input
              className='text-input'
              placeholder='stars'
              name='stars'
              type='text'
              value={stars}
              onBlur={this.onStarsInputBlur}
              onChange={this.onHandleChange}
            />
            {starsInvalid && <p id='warning'>Your input is invalid!</p>}
          </div>
          <License
            licenses={licenseList}
            onHandleChange={this.onHandleChange}
          />
          <div id='repo-forked'>
            <label htmlFor='forked'>
              <input
                onChange={this.onHandleChange}
                type='checkbox'
                id='forked'
                name='forked'
              />
              <span id='repo-forked-checkmark' />
              Include Forked
            </label>
          </div>
          <div id='repo-button'>
            <button type='submit' id='button'>
              Search
            </button>
          </div>
          <div id='line' />
        </form>
      </div>
    )
  }
}
