import React, { Component } from "react";

export default class DisplayInfor extends Component {
  state = {
    isShowListUsers: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  };
  render() {
    const { listUsers } = this.props;
    // console.table(listUsers);

    return (
      <div>
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUsers === true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>
        {this.state.isShowListUsers && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "blue"}>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age} </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
