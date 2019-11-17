import React, { Component } from 'react'
import github from '../../api/github'

export default class Results extends Component {
  render () {
    return (
      <div id='results'>
        <p>repo name</p>
        <p>Description</p>
        <p>Stars: 10088</p>
        <p>License: MIT License</p>
      </div>
    )
  }
}
