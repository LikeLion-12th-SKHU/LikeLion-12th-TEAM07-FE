import React from "react";
import {
  AppContainer,
  LoginContainer,
  LoginButton,
  LogoImage,
  LikeLiarImage,
} from "../css/LoginPageCss";
import Logo from "../assets/logo.png";
import LikeLiar from "../assets/LikeLiar.png";
import GoogleLoginLogo from "../assets/GoogleLoginLogo.png";
import KakaLoginLogo from "../assets/KakaoLoginLogo.png";
import GuestLogin from "../assets/GuestLogin.png";

export default function LoginPage() {
  return (
    <AppContainer>
      <LoginContainer>
        <LogoImage alt="Logo" src={Logo} />
        <LikeLiarImage alt="LikeLiar" src={LikeLiar} />

        <LoginButton alt="카카오 로그인" src={KakaLoginLogo}></LoginButton>
        <LoginButton alt="구글 로그인" src={GoogleLoginLogo}></LoginButton>
        <LoginButton alt="게스트 로그인" src={GuestLogin}></LoginButton>
      </LoginContainer>
    </AppContainer>
  );
}
