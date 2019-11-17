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

  onChange = e => {
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
          <div id='repo-name'>
            <input
              className='text-input'
              placeholder='name'
              name='text'
              type='text'
              value={text}
              onChange={this.onChange}
            />
          </div>
          <div id='repo-stars'>
            <input
              className='text-input'
              placeholder='stars'
              name='stars'
              type='text'
              value={stars}
              onChange={this.onChange}
            />
          </div>
          <div id='repo-license'>
            <select name='license' onChange={this.onChange}>
              <License />
            </select>
          </div>
          <div id='repo-forked'>
            <label htmlFor='forked'>
              <input
                onChange={this.onChange}
                type='checkbox'
                id='forked'
                name='forked'
              />
              <span id='repo-forked-checkmark' />
              Include Forked
            </label>
          </div>
        </form>
      </div>
    )
  }
}
