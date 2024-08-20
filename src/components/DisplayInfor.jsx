import React, { Component } from "react";
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
  const { listUsers } = props;
    return (
      <div className="display-infor-container">
        {true && (
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
                      onClick={() => props.handleDeleteUser(user.id)}
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


