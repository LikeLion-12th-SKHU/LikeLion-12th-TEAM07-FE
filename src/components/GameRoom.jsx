<<<<<<< HEAD
import React, { useRef, useEffect } from 'react';
=======
import React, { useRef } from 'react';
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
import GameRule from './GameRule';
import EffectSound from './EffectSound';
import { useNavigate, useLocation } from 'react-router-dom';

import {
<<<<<<< HEAD
=======
    BackGroundColor,
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    Container,
    Header,
    LogoButton,
    LobbyBody,
    Category,
    ProfileBack,
    DetailCategory,
    ElementL,
    ElementR,
    ElementH,
    GameRuleWindow,
<<<<<<< HEAD
    Information,
=======
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
} from '../css/GameRoom.js';

const GameRoom = ({ openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = React.useState(false);
    const effectSound = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
<<<<<<< HEAD

=======
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    const roomData = location.state || {}; // roomData가 없을 경우를 대비해 빈 객체로 초기화

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    const handleRoomSettingsClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/room-settings', { state: roomData }); // roomData를 state로 전달
<<<<<<< HEAD
        }, 140);
=======
        }, 150);
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    };

    return (
        <>
<<<<<<< HEAD
=======
            <BackGroundColor />
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
            <Container>
                <Header>
                    <LogoButton>LIke Liar</LogoButton>
                </Header>
                <LobbyBody>
                    <Category>
                        <ProfileBack>
                            {roomData.playerCount}
                            <br />
<<<<<<< HEAD
                            {roomData.name}
=======
                            {roomData.name}님의
                            <br />
                            <p>게임</p>
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                        </ProfileBack>
                        <DetailCategory>
                            <ElementL onClick={() => navigate('/')}>
                                방 나가기
                            </ElementL>
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
<<<<<<< HEAD
                    <Information></Information>
=======
                    {/* <gameDetail></gameDetail> */}
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default GameRoom;
