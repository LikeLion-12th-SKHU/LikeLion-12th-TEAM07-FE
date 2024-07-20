import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const imageStyle = {
  width: "120px",
  height: "120px",
};

const image = {
  width: "200px",
  height: "100px",
};

function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src="/img/logo.png" alt="logo" style={imageStyle} />
        <img src="img/LikeLiar.png" alt="LikeLiar" style={image} />
      </div>
      <button className="login-button kakao">카카오 로그인</button>
      <button className="login-button google">Google 로그인</button>
      <button className="login-button guest">게스트로 로그인</button>
    </div>
  );
}

export default App;
