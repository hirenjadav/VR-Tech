import React from "react";
import "./home.css";

function Home(props) {
  return (
    <React.Fragment>
      <figure>
        <img
          src={require("../../assets/slideshow/slide1.jpg")}
          alt="infrastructure-header"
        ></img>
      </figure>
      <div className="main-content">
        <div className="container">
          <div className="content-title">
            <h1>
              <span>VR TECHNOCRAFT</span>
            </h1>
          </div>
          <h2 className="d-flex justify-content-center">
            Welcome to India's biggest job shop for CNC waterjet profile cutting
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
