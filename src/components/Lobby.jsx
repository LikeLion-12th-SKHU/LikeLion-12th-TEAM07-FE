import React, { useRef } from 'react';
import GameRule from './GameRule';
import Profile from './Profile';
import EffectSound from './EffectSound';
import GameRoomList from './GameRoomList'; // 방 목록 컴포넌트
import { useNavigate } from 'react-router-dom';
import {
<<<<<<< HEAD
    Container,
    Header,
    GameLIst,
=======
    BackGroundColor,
    Container,
    Header,
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    LogoButton,
    LobbyBody,
    Category,
    ProfileBack,
    DetailCategory,
    ElementL,
    ElementR,
    ElementH,
    ElementS,
    ElementRank,
    GameRuleWindow,
} from '../css/LobbyCss.js';

const Lobby = ({ openSettings, rooms = [] }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = React.useState(false);
    const effectSound = useRef(null);
    const navigate = useNavigate();

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };
    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };
<<<<<<< HEAD
    const handleLobbyClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/');
        }, 140);
    };
=======

>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    const handleCreateGameClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/create-game');
<<<<<<< HEAD
        }, 140);
=======
        }, 150);
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    };
    const handleHomeClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/Home-go');
<<<<<<< HEAD
        }, 140);
=======
        }, 150);
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    };
    const handleRankingClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/Ranking-go');
<<<<<<< HEAD
        }, 140);
    };
    return (
        <>
=======
        }, 150);
    };

    return (
        <>
            <BackGroundColor />
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
            <Container>
                <Header>
                    <LogoButton>LIke Liar</LogoButton>
                </Header>
                <LobbyBody>
                    <Category>
                        <ProfileBack>
                            <Profile />
                        </ProfileBack>
                        <DetailCategory>
<<<<<<< HEAD
                            <ElementL onClick={handleLobbyClick}>로비</ElementL>
=======
                            <ElementL onClick={() => navigate('/')}>
                                로비
                            </ElementL>
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                            <ElementR onClick={handleCreateGameClick}>
                                방 만들기
                            </ElementR>
                            <ElementH onClick={handleHomeClick}>
                                홈으로 가기
                            </ElementH>
                            <ElementS
                                onClick={() => {
                                    effectSound.current.playSound();
                                    openSettings();
                                }}
                            >
                                설정
                            </ElementS>
                            <ElementRank onClick={handleRankingClick}>
                                랭킹 보기
                            </ElementRank>
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
<<<<<<< HEAD
                    <GameLIst>
                        <GameRoomList rooms={rooms} />
                    </GameLIst>
=======
                    <GameRoomList rooms={rooms} />
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default Lobby;
