// LoginPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

import {
    AppContainer,
    LoginContainer,
    LoginButton,
    LogoImage,
    LikeLiarImage,
} from '../css/LoginPageCss';

import Logo from '../assets/logo.png';
import LikeLiar from '../assets/LikeLiar.png';
import GoogleLoginLogo from '../assets/GoogleLoginLogo.png';
import KakaLoginLogo from '../assets/KakaoLoginLogo.png';
import GuestLogin from '../assets/GuestLogin.png';

export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loginToken, setLoginToken] = useState({
        accessToken: '',
        refreshToken: '',
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const provider = localStorage.getItem('provider');

        if (code) {
            getToken(code, provider);
        }
    }, []);

    useEffect(() => {
        if (loginToken.accessToken) {
            login(loginToken);
            navigate('/');
        }
    }, [loginToken, login, navigate]);

    const kakaoHandleLogin = () => {
        localStorage.setItem('provider', 'kakao');
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
    };

    const googleHandleLogin = () => {
        localStorage.setItem('provider', 'google');
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=email profile`;
    };

    const getToken = async (authCode, provider) => {
        try {
            const idTokenResponse = await axios.get(
                `${process.env.REACT_APP_API_BASE_URL}/${provider}/id-token?code=${authCode}`
            );
            const tokenResponse = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}/${provider}/token`,
                {
                    authCode: idTokenResponse.data.data,
                }
            );

            if (tokenResponse.data) {
                setLoginToken(tokenResponse.data.data);
            }
        } catch (error) {
            console.error('토큰을 가져오는데 실패했습니다.', error);
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
                />
                <LoginButton
                    alt="구글 로그인"
                    src={GoogleLoginLogo}
                    onClick={googleHandleLogin}
                />
                <LoginButton alt="게스트 로그인" src={GuestLogin} />
            </LoginContainer>
        </AppContainer>
    );
}
