import React, { Component } from "react";

export default class MyComponent extends Component {
  state = {
    name: "Dat",
    age: 22,
  };

  handleClick = (event) => {
    console.log("click me");
    console.log("My name is", this.state.name);
    this.setState({
      name: "Tien Dat",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    
  };
  render() {
    return (
      <div>
        my name is {this.state.name}
        <button onClick={this.handleClick}>Click me</button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
