import React, { Component } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  
  render() {
    const myInfor = ["a","b","c"];
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="Tien Dat" age="30" myInfor={myInfor}/>
      </div>
    );
  }
}
