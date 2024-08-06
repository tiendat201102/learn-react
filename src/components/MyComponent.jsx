
import React, { Component } from 'react'

export default class MyComponent extends Component {
    state = {
        name: "Dat",
        age: 22,
    }
  render() {
    return (
      <div>
        my name is {this.state.name}
      </div>
    )
  }
}

