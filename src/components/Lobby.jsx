import React, { useRef } from 'react';
import GameRule from './GameRule';
import Profile from './Profile';
import EffectSound from './EffectSound';
import GameRoomList from './GameRoomList'; // 방 목록 컴포넌트
import { useNavigate } from 'react-router-dom';

import {
    Container,
    Header,
    GameLIst,
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
    const handleLobbyClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/lobby');
        }, 140);
    };
    const handleCreateGameClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/create-game');
        }, 140);
    };
    const handleHomeClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/');
        }, 140);
    };
    const handleRankingClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/ranking');
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
                            <Profile />
                        </ProfileBack>
                        <DetailCategory>
                            <ElementL onClick={handleLobbyClick}>로비</ElementL>
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

                    <GameLIst>
                        <GameRoomList rooms={rooms} />
                    </GameLIst>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default Lobby;
