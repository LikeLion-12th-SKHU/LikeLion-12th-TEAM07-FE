import React from 'react';
import {
    ProfileDetail,
<<<<<<< HEAD
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

const Profile = ({ user }) => {
    const isGuest = !user || !user.isLoggedIn;
    // 여기는 서버랑 연결하고 해야할 거 같아요오오ㅗ어ㅗ머ㅣㄴ올머ㅏ오
    return (
        <ProfileDetail>
            <Icons />
            <Container>
                <ProfileName>
                    <Content1>{isGuest ? 'Guest' : user.name}</Content1>
                    <Content2>님</Content2>
                </ProfileName>
                <Content3>⎯⎯⎯⎯</Content3>
                <InfoContainer>
                    <Ranking>
                        {isGuest ? '정보 없음' : `랭킹: ${user.ranking}`}
                    </Ranking>
                    <Score>
                        {isGuest ? '정보 없음' : `점수: ${user.score}`}
                    </Score>
                </InfoContainer>
                <LoginButton>{isGuest ? '로그인 >' : '로그아웃'}</LoginButton>
            </Container>
=======
    ProfilePicture,
    ProfileName,
} from '../css/ProfileCss.js';
const Profile = ({ user }) => {
    return (
        <ProfileDetail>
            <ProfilePicture />
            <ProfileName></ProfileName>
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
        </ProfileDetail>
    );
};

export default Profile;
