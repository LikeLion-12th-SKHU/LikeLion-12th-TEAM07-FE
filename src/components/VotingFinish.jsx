import React, { useState, useEffect, useRef } from 'react';
import GameRule from './GameRule';
import { useNavigate, useLocation } from 'react-router-dom';
import EffectSound from './EffectSound';
import logoImage from '../assets/logo.png';

import {
    Container,
    Header,
    VotingResult,
    LogoButton,
    LobbyBody,
    Category,
    ProfileBack,
    Content,
    DetailCategory,
    Element1,
    Element2,
    GameRuleWindow,
    Element4,
    Element5,
    Element3,
    Element6,
    Screen,
    Ele,
    SuggestedWord,
    PlayerId,
    Title,
    PlayerList,
    Player01,
    Player02,
    Player03,
    Player04,
    Player05,
    Player06,
    PlayerName,
    Result,
    NumberIcon1,
    NumberIcon2,
    NumberIcon3,
    NumberIcon4,
    NumberIcon5,
    NumberIcon6,
    RoomOut,
    ViewResult,
    ButtonContainer,
    NextRound,
} from '../css/VotingFinishCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';
import GameResult from './GameResult';

const VotingFinish = ({ openSettings }) => {
    const location = useLocation();
    const roomData = location.state || {
        topic: '기본 주제',
        votingTimeLimit: 20,
        name: '기본 방 이름',
        playerCount: 6,
        votes: [
            { id: 'player1', name: 'mubin', votes: 0, job: '라이어' },
            { id: 'player2', name: 'yurim', votes: 0, job: '시민' },
            { id: 'player3', name: 'seoyun', votes: 0, job: '시민' },
            { id: 'player4', name: 'giwoong1', votes: 0, job: '시민' },
            { id: 'player5', name: 'giwoong2', votes: 0, job: '시민' },
            { id: 'player6', name: 'giwoong3', votes: 0, job: '시민' },
        ],
    };
    const [openResult, setOpenResult] = useState(false);
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [timer, setTimer] = useState(10);

    const effectSound = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (timer === 0) {
            if (topPlayers.job === '라이어') {
                // 라이어일 때
                // navigate('');
            } else {
                // 시민일 떄
                // 탈락한 플레이어의 정보들을 가지고 이동해야함.
                // navigate('');
            }
        }
    }, []);
    const openGameResult = () => {
        setOpenResult(true);
    };

    const closeGameResult = () => {
        effectSound.current.playSound();
        setOpenResult(false);
    };
    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    // 가장 많은 표를 받은 플레이어 찾기
    const maxVotes = Math.max(...roomData.votes.map((player) => player.votes));
    const topPlayers = roomData.votes.filter(
        (player) => player.votes === maxVotes
    );

    // 가장 많은 표를 받은 플레이어의 정보 추출
    const topPlayer = topPlayers[0] || { name: '없음', job: '없음' };

    return (
        <>
            <Container>
                <Header>
                    <LogoButton>Like Liar</LogoButton>
                </Header>
                <LobbyBody>
                    <Category>
                        <ProfileBack>
                            <Logo>
                                <LogoContainer>
                                    <img
                                        className="logo"
                                        src={logoImage}
                                        alt="LikeLiar"
                                    />
                                    <p className="miniTitle">[ 방 제목 ]</p>
                                </LogoContainer>
                                <GameName>{roomData.name}</GameName>
                            </Logo>
                        </ProfileBack>
                        <DetailCategory>
                            {roomData.votes.map((player, index) => (
                                <Ele
                                    key={player.id}
                                    style={{
                                        backgroundColor: topPlayers.includes(
                                            player
                                        )
                                            ? '#a0a0a0'
                                            : '#dddddd',
                                    }}
                                >
                                    {index === 0 && (
                                        <Element1
                                            isTopPlayer={topPlayers.includes(
                                                player
                                            )}
                                        >
                                            {index + 1}
                                        </Element1>
                                    )}
                                    {index === 1 && (
                                        <Element2
                                            isTopPlayer={topPlayers.includes(
                                                player
                                            )}
                                        >
                                            {index + 1}
                                        </Element2>
                                    )}
                                    {index === 2 && (
                                        <Element3
                                            isTopPlayer={topPlayers.includes(
                                                player
                                            )}
                                        >
                                            {index + 1}
                                        </Element3>
                                    )}
                                    {index === 3 && (
                                        <Element4
                                            isTopPlayer={topPlayers.includes(
                                                player
                                            )}
                                        >
                                            {index + 1}
                                        </Element4>
                                    )}
                                    {index === 4 && (
                                        <Element5
                                            isTopPlayer={topPlayers.includes(
                                                player
                                            )}
                                        >
                                            {index + 1}
                                        </Element5>
                                    )}
                                    {index === 5 && (
                                        <Element6
                                            isTopPlayer={topPlayers.includes(
                                                player
                                            )}
                                        >
                                            {index + 1}
                                        </Element6>
                                    )}
                                    <PlayerId
                                        isTopPlayer={topPlayers.includes(
                                            player
                                        )}
                                    >
                                        {player.name}
                                    </PlayerId>
                                </Ele>
                            ))}
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>

                    <Screen>
                        <SuggestedWord>
                            <Title>투표</Title>
                            <Content>투표 완료</Content>
                        </SuggestedWord>
                        <PlayerList>
                            {roomData.votes.map((player, index) => {
                                const PlayerComponent = [
                                    Player01,
                                    Player02,
                                    Player03,
                                    Player04,
                                    Player05,
                                    Player06,
                                ][index];
                                const NumberIconComponent = [
                                    NumberIcon1,
                                    NumberIcon2,
                                    NumberIcon3,
                                    NumberIcon4,
                                    NumberIcon5,
                                    NumberIcon6,
                                ][index];

                                const isTopPlayer = topPlayers.includes(player);
                                return (
                                    <PlayerComponent
                                        key={player.id}
                                        style={{
                                            backgroundColor: isTopPlayer
                                                ? '#b0b0b0'
                                                : '#ffffff',
                                        }}
                                    >
                                        <PlayerName isTopPlayer={isTopPlayer}>
                                            <NumberIconComponent>
                                                {index + 1}
                                            </NumberIconComponent>
                                            <div className="name">
                                                {player.name}
                                            </div>
                                        </PlayerName>
                                        <VotingResult isTopPlayer={isTopPlayer}>
                                            {player.votes} 표
                                        </VotingResult>
                                    </PlayerComponent>
                                );
                            })}
                        </PlayerList>
                        <Result>
                            <>
                                <div className="playerName">
                                    [ {topPlayer.name} ]
                                </div>{' '}
                                님은
                                <div
                                    className={
                                        topPlayer.job === '라이어'
                                            ? 'Liar'
                                            : 'Citizen'
                                    }
                                >
                                    {topPlayer.job}
                                </div>{' '}
                                입니다.
                                {/* <div className="timer"> /div> */}
                                {topPlayer.job === '라이어' && (
                                    <ButtonContainer>
                                        <RoomOut onClick={openGameResult}>
                                            나가기
                                        </RoomOut>
                                        <ViewResult>제시어</ViewResult>
                                    </ButtonContainer>
                                )}
                                {topPlayer.job === '시민' && (
                                    <NextRound>
                                        다음 라운드까지 {timer} 초 >
                                    </NextRound>
                                )}
                            </>
                        </Result>
                    </Screen>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
            {openResult && <GameResult onClose={closeGameResult} />}
        </>
    );
};

export default VotingFinish;
