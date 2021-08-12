import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt=""
      />
      <a href={loginUrl}>Login to Spotify</a>
    </div>
  );
};

export default Login;
