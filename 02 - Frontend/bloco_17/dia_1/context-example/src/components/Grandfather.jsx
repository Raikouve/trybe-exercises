import React, { Component } from 'react'
import Father from './Father'

export default class Grandfather extends Component {
  render() {
    return (
      <div>
        <h2>Avô</h2>
        <Father />
      </div>
    )
  }
}
