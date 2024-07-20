import React from "react";
import {
  AppContainer,
  LoginContainer,
  LoginButton,
  Logo,
} from "../css/LoginPageCss";
import logoImage from "../assets/logo.png";
import likeLiarImage from "../assets/LikeLiar.png";

const imageStyle = {
  width: "120px",
  height: "120px",
};

const image = {
  width: "200px",
  height: "100px",
};

export default function LoginPage() {
  return (
    <AppContainer>
      <LoginContainer>
        <Logo>
          <img src={logoImage} alt="logo" style={imageStyle} />
          <img src={likeLiarImage} alt="LikeLiar" style={image} />
        </Logo>
        <LoginButton className="login-button kakao">카카오 로그인</LoginButton>
        <LoginButton className="login-button google">Google 로그인</LoginButton>
        <LoginButton className="login-button guest">
          게스트로 로그인
        </LoginButton>
      </LoginContainer>
    </AppContainer>
  );
}
