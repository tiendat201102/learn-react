
import React, { Component } from 'react'

export default class MyComponent extends Component {
    state = {
        name: "Dat",
        age: 22,
    }
    
    handleClick = (event) => {
        console.log("click me");
        console.log("My name is", this.state.name);
        this.setState({
            name: "Tien Dat"
        });
    }

    handleOnMouseOver(event) {
        console.log(event);
        
    }

  render() {
    return (
      <div>
        my name is {this.state.name}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

