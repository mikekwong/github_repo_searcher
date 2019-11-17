import React, { Component } from 'react'
import License from './License'
import './Search.css'

export default class Search extends Component {
  state = {
    text: '',
    stars: '',
    license: '',
    forked: false
  }

  onFormSubmit = e => {
    e.preventDefault()
  }

  onHandleChange = e => {
    if (e.target.name === 'forked') {
      this.setState({
        forked: !this.state.checked
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render () {
    const { text, stars, license, forked } = this.state
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
              onChange={this.onHandleChange}
            />
          </div>
          <div id='repo-license' className='fields-input'>
            <label className='fields-label'>License</label>
            <select name='license' onChange={this.onHandleChange}>
              <License />
            </select>
          </div>
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
        </form>
        <div id='line' />
      </div>
    )
  }
}
