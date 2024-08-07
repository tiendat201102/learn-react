import React, { Component } from "react";

export default class UserInfor extends Component {
  state = {
    name: "Dat",
    age: 22,
  };

  handleClick = (event) => {
    console.log("click me");
    console.log("My name is", this.state.name, "I'm ", this.state.age);
    this.setState({
      name: "Tien Dat",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name}
        <button onClick={this.handleClick}>Click me</button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label htmlFor="">Your name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <label htmlFor="">Your age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />

          <button>submit</button>
        </form>
      </div>
    );
  }
}
