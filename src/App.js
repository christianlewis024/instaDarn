import React from "react";
import "./App.css";
import Post from "./post";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
        ></img>
      </div>
      <h1>Hi friends. </h1>
      {/* header */}
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
