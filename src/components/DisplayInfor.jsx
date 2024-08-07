import React, { Component } from "react";

export default class DisplayInfor extends Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);

    return (
      <div>
        {/* <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr /> */}
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name} </div>
              <div>My age is {user.age} </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
