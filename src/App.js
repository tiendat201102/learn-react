import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from "./components/MyComponent";
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import RiceLandingPage from "./components/Giaodien";


const App = () => {

  return (
    <div className="App">
      Hello world
      <button>test</button>
    </div>
  );
}
export default App;
