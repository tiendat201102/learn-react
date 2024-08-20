import React, { Component } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

export default class DisplayInfor extends Component {
  constructor(props) {
    console.log("Call me constructor");

    super(props);
    this.state = {
      isShowListUsers: true,
    };
  }

  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers,
    });
  };

  componentDidMount() {
    console.log("call me component did mount");
    setTimeout(() => {
      document.title = "Tien Dat";
    }, 3000);
  }

  componentDidUpdate() {
    console.log("call me component did update");

  }

  render() {
    console.log("call me render");

    const { listUsers } = this.props;
    // console.table(listUsers);

    return (
      <div className="display-infor-container">
        {/* <img src={logo} alt="" /> */}
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUsers === true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>
        {this.state.isShowListUsers && (
          <>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "blue"}>
                  <div>
                    <div>My name is {user.name} </div>
                    <div>My age is {user.age} </div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
