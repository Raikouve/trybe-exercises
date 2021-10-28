import React, { Component } from 'react'
import Son from './Son'

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>Pai</h3>
        <Son />
      </div>
    )
  }
}
