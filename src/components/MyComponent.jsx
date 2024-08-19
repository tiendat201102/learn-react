import React, { Component } from "react";
import AddUserInfor from "./AddUserInfor";
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
      { id: 10, name: "Duong Mai", age: "34" },
    ],
  };
  handleAddNewUser = (obj) => {
    console.log(obj);
    this.setState({
      listUsers: [obj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userID) => {
    // alert("hello delete");
    let listUserClone = this.state.listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    this.setState({
      listUsers: listUserClone,
    });
  };
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}
