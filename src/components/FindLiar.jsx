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
    const roomData = location.state || {};
    const { shuffledPlayers } = roomData;
    const subTopic = location.state?.subTopic || '없음';

    const initializedPlayers = shuffledPlayers.map((player) => ({
        ...player,
        votes: player.votes || 0,
    }));

    const [players, setPlayers] = useState(initializedPlayers);
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [timer, setTimer] = useState(10);
    const [secondTimer, setSecondTimer] = useState(
        roomData.votingTimeLimit || 10
    );
    const [votedPlayer, setVotedPlayer] = useState(null);
    const effectSound = useRef(null);
    const [clickedPlayer, setClickedPlayer] = useState(null);
    const [isVotingScreenVisible, setIsVotingScreenVisible] = useState(false);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerInterval);
                    setIsVotingScreenVisible(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    useEffect(() => {
        if (isVotingScreenVisible) {
            const secondTimerInterval = setInterval(() => {
                setSecondTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(secondTimerInterval);
                        navigate('/voting-finish', {
                            state: {
                                ...roomData,
                                shuffledPlayers: players,
                                subTopic, // 업데이트된 플레이어 데이터 전송
                            },
                        });
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(secondTimerInterval);
        }
    }, [isVotingScreenVisible, navigate, players, roomData, subTopic]);

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    const handleVote = (playerId) => {
        setPlayers((prevPlayers) => {
            return prevPlayers.map((player) => {
                if (player.id === playerId) {
                    if (votedPlayer === playerId) {
                        return { ...player, votes: (player.votes || 0) - 1 };
                    } else {
                        return { ...player, votes: (player.votes || 0) + 1 };
                    }
                } else if (player.id === votedPlayer) {
                    return { ...player, votes: (player.votes || 0) - 1 };
                }
                return player;
            });
        });

        setVotedPlayer(votedPlayer === playerId ? null : playerId);
    };

    const handleClick = (playerId) => {
        setClickedPlayer(playerId === clickedPlayer ? null : playerId);
    };

    const timerColor = timer <= 10 ? 'red' : 'black';

    const PlayerComponents = [
        Player01,
        Player02,
        Player03,
        Player04,
        Player05,
        Player06,
    ];

    const NumberIconComponents = [
        NumberIcon1,
        NumberIcon2,
        NumberIcon3,
        NumberIcon4,
        NumberIcon5,
        NumberIcon6,
    ];

    const ElementComponents = [
        Element1,
        Element2,
        Element3,
        Element4,
        Element5,
        Element6,
    ];

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
                        {players.length > 0 && (
                            <DetailCategory>
                                {players
                                    .filter(
                                        (player) => player.name.trim() !== ''
                                    )
                                    .map((player, index) => {
                                        const ElementComponent =
                                            ElementComponents[index] ||
                                            Element1;

                                        return (
                                            <Ele key={player.id}>
                                                <ElementComponent>
                                                    {index + 1}
                                                </ElementComponent>
                                                <PlayerId>
                                                    {player.name}
                                                </PlayerId>
                                            </Ele>
                                        );
                                    })}
                            </DetailCategory>
                        )}
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    {timer > 0 ? (
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
                        isVotingScreenVisible && (
                            <Screen>
                                <SuggestedWord>
                                    <Title>투표</Title>
                                    <Content>라이어를 지목하세요!</Content>
                                </SuggestedWord>
                                {players.length > 0 && (
                                    <PlayerList>
                                        {players
                                            .filter(
                                                (player) =>
                                                    player.name.trim() !== ''
                                            )
                                            .map((player, index) => {
                                                const PlayerComponent =
                                                    PlayerComponents[index] ||
                                                    'div';
                                                const NumberIconComponent =
                                                    NumberIconComponents[
                                                        index
                                                    ] || 'div';

                                                return (
                                                    <PlayerComponent
                                                        key={player.id}
                                                        style={{
                                                            opacity:
                                                                votedPlayer ===
                                                                player.id
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
                                                            onClick={() => {
                                                                handleVote(
                                                                    player.id
                                                                );
                                                                handleClick(
                                                                    player.id
                                                                );
                                                            }}
                                                            disabled={
                                                                votedPlayer !==
                                                                    null &&
                                                                clickedPlayer !==
                                                                    player.id
                                                            }
                                                        >
                                                            {votedPlayer ===
                                                            player.id
                                                                ? '투표취소'
                                                                : '투표하기'}
                                                        </VotingButton>
                                                    </PlayerComponent>
                                                );
                                            })}
                                    </PlayerList>
                                )}
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
                        )
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
