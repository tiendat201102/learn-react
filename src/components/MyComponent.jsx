import React, { Component } from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

export default class MyComponent extends Component {
  state = {
    listUsers: [
      { id: 1, name: "Tien Dat", age: "30" },
      { id: 2, name: "Nguyen Van", age: "25" },
      { id: 3, name: "Tran Thi", age: "28" },
      { id: 4, name: "Le Hoang", age: "33" },
      { id: 5, name: "Pham Minh", age: "22" },
      { id: 6, name: "Vo Thanh", age: "37" },
      { id: 7, name: "Dang Quoc", age: "31" },
      { id: 8, name: "Bui Thuy", age: "29" },
      { id: 9, name: "Hoang Anh", age: "26" },
      { id: 10, name: "Duong Mai", age: "34" }
    ]
  }

  render() {
    return (
      <div>
        <UserInfor />
        <DisplayInfor listUsers={this.state.listUsers}/>
      </div>
    );
  }
}
