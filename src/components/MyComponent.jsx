
import React, { Component } from 'react'

export default class MyComponent extends Component {
    state = {
        name: "Dat",
        age: 22,
    }
    handleClick() {
        console.log("click me");
    }

    handleOnMouseOver(event) {
        console.log(event);
        
    }

  render() {
    return (
      <div>
        my name is {this.state.name}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    )
  }
}

