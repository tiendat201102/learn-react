import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from "./components/MyComponent";
    
import React, { Component } from 'react'
import RiceLandingPage from "./components/Giaodien";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
        {/* <RiceLandingPage/> */}
      </div>
    )
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit .
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//     <div>
//       <MyComponent/>
//     </div>
//   );
// }
export default App;
