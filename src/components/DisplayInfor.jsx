import React, { Component } from 'react'

export default class DisplayInfor extends Component {
  render() {
    const {name, age} = this.props;
    
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    )
  }
}
