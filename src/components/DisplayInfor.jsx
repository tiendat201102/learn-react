import React, { Component, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// export default class DisplayInfor extends Component {
//   render() {
//     console.log("call me render");

//     const { listUsers } = this.props;
//     // console.table(listUsers);

//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={user.age > 30 ? "red" : "blue"}>
//                   <div>
//                     <div>My name is {user.name} </div>
//                     <div>My age is {user.age} </div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

export default function DisplayInfor(props) {
  const { listUsers } = props; //object
  const [isShowHideListUser, setIsShowHideListUser] = useState(true)

  const handleShowHide = () => {
    setIsShowHideListUser(!isShowHideListUser)
  }
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHide()}>
          {isShowHideListUser==true ? "Hide list user" : "Show list user"}
          </span>
      </div>

      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={user.age > 30 ? "red" : "blue"}>
                <div>
                  <div>My name is {user.name} </div>
                  <div>My age is {user.age} </div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
