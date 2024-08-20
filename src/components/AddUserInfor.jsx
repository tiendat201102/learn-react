import React, { Component, useState } from "react";

// export default class AddUserInfor extends Component {
//   state = {
//     name: "",
//     age: ""
//   };

//   handleClick = (event) => {
//     console.log("click me");
//     console.log("My name is", this.state.name, "I'm ", this.state.age);
//     this.setState({
//       name: "Tien Dat",
//     });
//   };

//   handleOnChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     // console.log(this.state);

//     this.props.handleAddNewUser({
//       id: Math.round(Math.random()*100)+12,
//       name: this.state.name,
//       age: this.state.age
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name}
//         <button onClick={this.handleClick}>Click me</button>
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <label htmlFor="">Your name: </label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => {
//               this.handleOnChange(event);
//             }}
//           />
//           <label htmlFor="">Your age: </label>
//           <input
//             type="text"
//             value={this.state.age}
//             onChange={(event) => {
//               this.handleOnChangeAge(event);
//             }}
//           />

//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }

export default function AddUserInfor(props) {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");

  const handleClick = (event) => {
    // console.log("click me");
    // console.log("My name is", this.state.name, "I'm ", this.state.age);
    this.setState({
      name: "Tien Dat",
    });
  };

  const handleOnChange = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });

    setname(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);

    props.handleAddNewUser({
      id: Math.round(Math.random() * 100) + 12,
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name}
      <button onClick={handleClick}>Click me</button>
      <form
        onSubmit={(event) => {
          this.handleOnSubmit(event);
        }}
      >
        <label htmlFor="">Your name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            this.handleOnChange(event);
          }}
        />
        <label htmlFor="">Your age: </label>
        <input
          type="text"
          value={age}
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />

        <button>submit</button>
      </form>
    </div>
  );
}
