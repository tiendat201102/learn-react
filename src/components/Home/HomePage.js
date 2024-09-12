import React from "react";
import videoHomePage from "../../assests/video-homepage.mp4";
import { useSelector } from "react-redux";

export default function HomePage(props) {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const account = useSelector(state => state.user.account);

  // console.log("accout:", account, " isAuthenticated", isAuthenticated);
  

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">Make forms worth filling out</div>
        <div className="title-2">
          Get more data—like signups, feedback, and anything else—with forms
          esigned to be refreshingly different.
        </div>
        <div className="title-3">
          <button>Get started-it's free</button>
        </div>
      </div>
    </div>
  );
}
