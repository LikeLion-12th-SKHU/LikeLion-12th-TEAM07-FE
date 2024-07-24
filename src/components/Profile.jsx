// Profile.jsx
import React, { useRef } from 'react';
import EffectSound from './EffectSound';
import { useNavigate } from 'react-router-dom';

import {
    ProfileDetail,
    ProfileName,
    Icons,
    Content1,
    Content2,
    LoginButton,
    Content3,
    Container,
    Ranking,
    Score,
    InfoContainer,
} from '../css/ProfileCss.js';
import { useAuth } from '../contexts/AuthContext.jsx';

const Profile = () => {
    const effectSound = useRef(null);
    const navigate = useNavigate();

    const { userInfo, logout } = useAuth();
    const isGuest = !userInfo;
    const handleLoginClick = () => {
        effectSound.current.playSound();
        if (isGuest) {
            setTimeout(() => {
                navigate('/login');
            }, 140);
        } else {
            logout();
        }
    };
    return (
        <ProfileDetail>
            <Icons />
            <Container>
                <ProfileName>
                    <Content1>{isGuest ? 'Guest' : userInfo.name}</Content1>
                    <Content2>님</Content2>
                </ProfileName>
                <Content3>⎯⎯⎯⎯</Content3>
                <InfoContainer>
                    <Ranking>
                        {/* 아직 보류 */}
                        {isGuest ? '정보 없음' : `랭킹: ${userInfo.ranking}`}
                    </Ranking>
                    <Score>
                        {/* 아직 보류 */}
                        {isGuest ? '정보 없음' : `점수: ${userInfo.score}`}
                    </Score>
                </InfoContainer>
                <LoginButton onClick={handleLoginClick}>
                    {isGuest ? '로그인 >' : '로그아웃'}
                </LoginButton>
            </Container>
            <EffectSound ref={effectSound} />
        </ProfileDetail>
    );
};

export default Profile;
