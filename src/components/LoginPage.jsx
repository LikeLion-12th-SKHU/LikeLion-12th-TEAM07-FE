import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const [code, setCode] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const provider = localStorage.getItem("provider");

    if (code) {
      setCode(code);
      getToken(code, provider);
    }
  }, [navigate]);

  const kakaoHandleLogin = () => {
    localStorage.setItem("provider", "kakao");
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=627aa5c7da11793c0aa31902e4af4051&redirect_uri=http://localhost:3000/login";
  };

  const googleHandleLogin = () => {
    localStorage.setItem("provider", "google");
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=994954719923-uhpc7edlvk6cnfe25iscnmdsnlbhtpmr.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login&response_type=code&scope=email profile`;
  };

  const getToken = async (authCode, provider) => {
    try {
      const idTokenResponse = await axios.get(
        `http://localhost:8090/api/${provider}/id-token?code=${authCode}`
      );
      const idToken = idTokenResponse.data.data;
      setIdToken(idToken);

      const tokenResponse = await axios.post(
        `http://localhost:8090/api/${provider}/token`,
        {
          authCode: idToken,
        }
      );

      console.log(tokenResponse);

      if (tokenResponse.data) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  return (
    <AppContainer>
      <LoginContainer>
        <LogoImage alt="Logo" src={Logo} />
        <LikeLiarImage alt="LikeLiar" src={LikeLiar} />

        <LoginButton
          alt="카카오 로그인"
          src={KakaLoginLogo}
          onClick={kakaoHandleLogin}
        ></LoginButton>
        <LoginButton
          alt="구글 로그인"
          src={GoogleLoginLogo}
          onClick={googleHandleLogin}
        ></LoginButton>
        <LoginButton alt="게스트 로그인" src={GuestLogin}></LoginButton>
      </LoginContainer>
    </AppContainer>
  );
}
