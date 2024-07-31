import React, { useState, useRef } from 'react';
import GameRule from './GameRule';
import EffectSound from './EffectSound';
import { useNavigate, useLocation } from 'react-router-dom';
import Player from '../components/Player';
import logoImage from '../assets/logo.png';

import {
    Container,
    Header,
    Logo,
    User,
    Des,
    LogoButton,
    LobbyBody,
    Category,
    ProfileBack,
    DetailCategory,
    ElementL,
    ElementR,
    ElementH,
    GameRuleWindow,
    Information,
    Description,
    ReadyButton,
    MiniTitle,
    Button,
    LogoContainer,
    GameName,
    StartButton,
} from '../css/GameRoom.js';

const GameRoom = ({ openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const effectSound = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const roomData = location.state || {};

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };
    const lobby = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/lobby');
        }, 140);
    };
    const closeGameRule = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            setIsGameRuleOpen(false);
        }, 140);
    };

    const gameStartClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/game-start', { state: roomData });
        }, 140);
    };

    const gameReadyClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {}, 140);
    };

    const handleRoomSettingsClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/room-settings', { state: roomData });
        }, 140);
    };

    return (
        <>
            <Container>
                <Header>
                    <LogoButton>LIke Liar</LogoButton>
                </Header>
                <LobbyBody>
                    <Category>
                        <ProfileBack>
                            <Logo>
                                <LogoContainer>
                                    <img
                                        className="logo"
                                        src={logoImage}
                                        alt="LikLiar"
                                    />
                                    <p className="miniTitle">[ 방 제목 ]</p>
                                </LogoContainer>
                                <GameName>{roomData.name}</GameName>
                            </Logo>
                        </ProfileBack>
                        <DetailCategory>
                            <ElementL onClick={lobby}>방 나가기</ElementL>
                            <ElementR onClick={handleRoomSettingsClick}>
                                방 설정
                            </ElementR>
                            <ElementH
                                onClick={() => {
                                    effectSound.current.playSound();
                                    openSettings();
                                }}
                            >
                                설정
                            </ElementH>
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    <Information>
                        <User>
                            <Player />
                        </User>
                        <Description>
                            <MiniTitle>방 설명</MiniTitle>
                            <Des>{roomData.description}</Des>
                        </Description>
                        <Button>
                            <ReadyButton onClick={gameReadyClick}>
                                준비 {roomData.playerCount}
                            </ReadyButton>
                            <StartButton onClick={gameStartClick}>
                                게임 시작
                            </StartButton>
                        </Button>
                    </Information>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default GameRoom;
