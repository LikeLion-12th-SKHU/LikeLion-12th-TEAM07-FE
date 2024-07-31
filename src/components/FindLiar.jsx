import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import EffectSound from './EffectSound';
import GameRule from './GameRule';
import logoImage from '../assets/logo.png';

import {
    Container,
    Warning,
    Header,
    LogoButton,
    LobbyBody,
    Category,
    ProfileBack,
    Content,
    DetailCategory,
    Element1,
    Element2,
    WarningSecond,
    GameRuleWindow,
    Element4,
    WarningText,
    Element5,
    Element3,
    Element6,
    WarningIcons,
    Screen,
    Ele,
    SuggestedWord,
    PlayerId,
    Title,
    Content1,
    Content2,
    SuggestedWordCheck,
    PlayerList,
    Player01,
    Player02,
    Player03,
    Player04,
    Player05,
    Player06,
    VotingButton,
    PlayerName,
    NumberIcon1,
    NumberIcon2,
    NumberIcon3,
    NumberIcon4,
    NumberIcon5,
    NumberIcon6,
} from '../css/FindLiarCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';

const FindLiar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const roomData = location.state || {
        topic: '기본 주제',
        votingTimeLimit: 10,
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

    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [timer, setTimer] = useState(10);
    const [secondTimer, setSecondTimer] = useState(
        roomData.votingTimeLimit || 0
    );
    const [votedPlayer, setVotedPlayer] = useState(null);
    const effectSound = useRef(null);
    const [votes, setVotes] = useState(roomData.votes || []);

    const [isTimerVisible, setIsTimerVisible] = useState(true);
    const [isSecondTimerVisible, setIsSecondTimerVisible] = useState(false);

    useEffect(() => {
        let timerInterval;
        if (isTimerVisible) {
            timerInterval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerInterval);
                        setIsTimerVisible(false);
                        setIsSecondTimerVisible(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerInterval);
    }, [isTimerVisible]);

    useEffect(() => {
        if (isSecondTimerVisible) {
            const secondTimerInterval = setInterval(() => {
                setSecondTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(secondTimerInterval);
                        navigate('/voting-finish', {
                            state: {
                                ...roomData,
                                votes,
                            },
                        });
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(secondTimerInterval);
        }
    }, [isSecondTimerVisible, secondTimer, navigate, roomData, votes]);

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    const handleVote = (playerId) => {
        if (votedPlayer === playerId) {
            // 투표 취소
            setVotes((prevVotes) =>
                prevVotes.map((player) =>
                    player.id === playerId
                        ? { ...player, votes: player.votes - 1 }
                        : player
                )
            );
            setVotedPlayer(null);
        } else {
            // 새로운 투표
            setVotes((prevVotes) =>
                prevVotes.map((player) => {
                    if (player.id === playerId) {
                        return { ...player, votes: player.votes + 1 };
                    }
                    if (player.id === votedPlayer) {
                        return { ...player, votes: player.votes - 1 };
                    }
                    return player;
                })
            );
            setVotedPlayer(playerId);
        }
    };

    const [clickedPlayer, setClickedPlayer] = useState(null);

    const handleClick = (playerId) => {
        setClickedPlayer(playerId === clickedPlayer ? null : playerId);
    };

    const timerColor = timer <= 10 ? 'red' : 'black';

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
                            {votes.map((player, index) => (
                                <Ele key={player.id}>
                                    {index === 0 && (
                                        <Element1>{index + 1}</Element1>
                                    )}
                                    {index === 1 && (
                                        <Element2>{index + 1}</Element2>
                                    )}
                                    {index === 2 && (
                                        <Element3>{index + 1}</Element3>
                                    )}
                                    {index === 3 && (
                                        <Element4>{index + 1}</Element4>
                                    )}
                                    {index === 4 && (
                                        <Element5>{index + 1}</Element5>
                                    )}
                                    {index === 5 && (
                                        <Element6>{index + 1}</Element6>
                                    )}
                                    <PlayerId>{player.name}</PlayerId>
                                </Ele>
                            ))}
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    {isTimerVisible ? (
                        <Screen>
                            <SuggestedWord>
                                <Title>투표</Title>
                                <Content>라이어를 지목하세요!</Content>
                            </SuggestedWord>
                            <SuggestedWordCheck>
                                <Content1>
                                    <div className="content1">라이어</div>
                                    <div className="content2">를 찾아라!!</div>
                                </Content1>
                                <Content2>
                                    <div className="content1">
                                        {roomData.votingTimeLimit}초! 안에
                                    </div>
                                    <div className="content2">투표시간</div>
                                </Content2>
                            </SuggestedWordCheck>
                            <Warning>
                                <WarningIcons />
                                <WarningText>
                                    <div
                                        className="Timer"
                                        style={{ color: timerColor }}
                                    >
                                        {timer}
                                    </div>
                                    초 후 투표가 시작됩니다.
                                </WarningText>
                            </Warning>
                        </Screen>
                    ) : (
                        <Screen>
                            <SuggestedWord>
                                <Title>투표</Title>
                                <Content>라이어를 지목하세요!</Content>
                            </SuggestedWord>
                            <PlayerList>
                                {votes.map((player, index) => {
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

                                    return (
                                        <PlayerComponent
                                            key={player.id}
                                            style={{
                                                opacity:
                                                    votedPlayer === player.id
                                                        ? 0.5
                                                        : 1,
                                            }}
                                        >
                                            <PlayerName>
                                                <NumberIconComponent>
                                                    {index + 1}
                                                </NumberIconComponent>
                                                <div className="name">
                                                    {player.name}
                                                </div>
                                            </PlayerName>
                                            <VotingButton
                                                isClicked={
                                                    clickedPlayer === player.id
                                                }
                                                onClick={() => {
                                                    handleVote(player.id);
                                                    handleClick(player.id);
                                                }}
                                                disabled={
                                                    votedPlayer !== null &&
                                                    clickedPlayer !== player.id
                                                }
                                            >
                                                {votedPlayer === player.id
                                                    ? '투표취소'
                                                    : '투표하기'}
                                            </VotingButton>
                                        </PlayerComponent>
                                    );
                                })}
                            </PlayerList>
                            <WarningSecond>
                                <WarningIcons />
                                <WarningText>
                                    <div
                                        className="Timer"
                                        style={{ color: 'red' }}
                                    >
                                        {secondTimer}초
                                    </div>
                                    남았습니다.
                                </WarningText>
                            </WarningSecond>
                        </Screen>
                    )}
                    {isGameRuleOpen && (
                        <GameRule closeGameRule={closeGameRule} />
                    )}
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
        </>
    );
};

export default FindLiar;
