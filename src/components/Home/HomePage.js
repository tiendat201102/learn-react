import React from "react";
import videoHomePage from "../../assests/video-homepage.mp4"

export default function HomePage(props) {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
}
