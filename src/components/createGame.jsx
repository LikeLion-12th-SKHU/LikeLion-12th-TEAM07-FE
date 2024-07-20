import React, { useState, useRef } from 'react';
//createGlobalStyle를 통해 뒷 배경 색을 #d5d5d5로 설정하였음.
import GameRule from './GameRule';
import Profile from './Profile';
import Setting from './Setting';
import AutoAudio from './AutoAudio';
import EffectSound from './EffectSound';
import {
    BackGroundColor,
    Container,
    Header,
    LogoButton,
    LobbyBody,
    Category,
    DetailCategory,
    ElementL,
    ElementR,
    ElementH,
    ElementRank,
    GameRuleWindow,
    ElementS,
    GameRoom,
    ProfileBack,
} from '../Css/createGameCss.js';
import { useNavigate } from 'react-router-dom';
import SettingNewGame from './SettingNewGame';

const CreateGame = () => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
    const [volume, setVolume] = useState(1);
    const Navigate = useNavigate();

    const effectSound = useRef(null);

    const openSetting = () => {
        setIsSetting(true);
        effectSound.current.playSound();
    };
    const closeSetting = () => {
        setIsSetting(false);
        effectSound.current.playSound();
    };
    const openGameRule = () => {
        setIsGameRuleOpen(true);
        effectSound.current.playSound();
    };
    const closeGameRule = () => {
        setIsGameRuleOpen(false);
        effectSound.current.playSound();
    };
    const handleCreateGameClick = () => {
        effectSound.current.playSound(); // 효과음 재생
        Navigate('/create-game'); // 버튼 클릭 시 페이지 이동
    };
    const handleLobbyClick = () => {
        effectSound.current.playSound(); // 효과음 재생
        Navigate('/'); // 버튼 클릭 시 페이지 이동
    };
    const handleHomeClick = () => {
        effectSound.current.playSound(); // 효과음 재생
        Navigate('/Home-go'); // 버튼 클릭 시 페이지 이동
    };
    const handleRankingClick = () => {
        effectSound.current.playSound(); // 효과음 재생
        Navigate('/Ranking-go'); // 버튼 클릭 시 페이지 이동
    };
    return (
        <>
            <BackGroundColor />
            <Container>
                <Header>
                    {/* Like Liar를 누르면 로비로 이ㄴ동하는. */}
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
                                    openSetting();
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
                    <GameRoom>
                        <SettingNewGame />
                    </GameRoom>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            <AutoAudio volume={volume} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
            {isSetting && (
                <Setting onVolumeChange={setVolume} onClose={closeSetting} />
            )}
        </>
    );
};
export default CreateGame;
