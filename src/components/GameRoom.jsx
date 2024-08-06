import React, { useState, useRef } from 'react';
import GameRule from './GameRule';
import EffectSound from './EffectSound';
import { useNavigate, useLocation } from 'react-router-dom';
import Player from '../components/Player';
import logoImage from '../assets/logo.png';
import axiosInstance from '../utils/apiConfig';
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
    const roomData = location.state; // 전달된 상태를 받기

    const openGameRule = () => {
        // console.log(roomData);

        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const outRoom = async () => {
        try {
            if (roomData && roomData.roomId) {
                await axiosInstance.post(`/rooms/${roomData.roomId}/exit`);
                navigate('/lobby');
            }
        } catch (error) {
            console.error('Failed to exit room:', error);
        }
        effectSound.current.playSound();
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

    const handleRoomSettingsClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/room-settings');
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
                                <GameName>{roomData.data.roomName}</GameName>
                            </Logo>
                        </ProfileBack>
                        <DetailCategory>
                            <ElementL onClick={outRoom}>방 나가기</ElementL>
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
                            <Player players={roomData} />
                        </User>
                        <Description>
                            <MiniTitle>방 설명</MiniTitle>
                            <Des>{roomData.data.content}</Des>
                        </Description>
                        <Button>
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
