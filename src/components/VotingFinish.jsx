import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GameResult from '../components/GameResult';
import EffectSound from './EffectSound';
import GameRule from './GameRule';
import logoImage from '../assets/logo.png';
import SuggestedWord from '../components/SuggestedWord';

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
    Element3,
    Element4,
    Element5,
    Element6,
    Element7,
    Screen,
    Ele,
    SuggesteWord,
    PlayerId,
    Title,
    PlayerList,
    PlayerName,
    Result,
    RoomOut,
    ViewResult,
    ButtonContainer,
    GameRuleWindow,
    Player01,
    Player02,
    Player03,
    Player04,
    Player05,
    Player06,
    NumberIcon1,
    NumberIcon2,
    NumberIcon3,
    NumberIcon4,
    NumberIcon5,
    NumberIcon6,
} from '../css/VotingFinishCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';

const VotingFinish = () => {
    const location = useLocation();
    const roomData = location.state || {
        topic: '기본 주제',
        votingTimeLimit: 20,
        name: '기본 방 이름',
        playerCount: 6,
        shuffledPlayers: [],
    };
    const subTopic = location.state?.subTopic || '없음';

    const [openResultSuggest, setOpenResultSuggest] = useState(false);
    const [suggestedWord, setSuggestedWord] = useState('');

    const [openResult, setOpenResult] = useState(false);
    const [isGameRuleVisible, setIsGameRuleVisible] = useState(false);
    const [timer, setTimer] = useState(30); // 타이머 초기값 설정
    const effectSound = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer <= 0) {
            handleTimerEnd();
        } else {
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        handleTimerEnd();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);
    const handleTimerEnd = () => {
        console.log('타이머 종료');

        const updatedRoomData = { ...roomData };

        // 탈락자의 정보를 공백으로 처리
        if (topPlayer.job !== '라이어') {
            updatedRoomData.shuffledPlayers =
                updatedRoomData.shuffledPlayers.map((player) =>
                    topPlayer.name === player.name
                        ? { ...player, name: '', job: '' }
                        : player
                );
        }

        // 시민과 라이어의 수를 체크하여 같으면 FinalMatch로 이동
        const liarCount = updatedRoomData.shuffledPlayers.filter(
            (player) => player.job === '라이어' && player.name !== ''
        ).length;
        const citizenCount = updatedRoomData.shuffledPlayers.filter(
            (player) => player.job === '시민' && player.name !== ''
        ).length;

        if (liarCount === citizenCount) {
            navigate('/final-match', {
                state: {
                    roomData: updatedRoomData,
                    subTopic: subTopic,
                },
            });
        } else {
            navigate('/game-discuss', {
                state: {
                    roomData: updatedRoomData,
                    subTopic: subTopic,
                },
            });
        }
    };
    const processVotes = () => {
        const playerVotes = roomData.shuffledPlayers.map((player) => ({
            ...player,
            votes: player.votes || 0,
        }));

        const maxVotes = Math.max(...playerVotes.map((player) => player.votes));
        const topPlayers = playerVotes.filter(
            (player) => player.votes === maxVotes
        );

        const isInvalidVote = topPlayers.length > 1;
        const topPlayer = isInvalidVote
            ? { name: '없음', job: '없음' }
            : topPlayers[0] || { name: '없음', job: '없음' };

        if (topPlayer.job === '라이어') {
            console.log('라이어 결과: 30초 타이머 설정');
            setTimer(30);
        } else {
            console.log('시민 또는 무효표 결과: 10초 타이머 설정');
            setTimer(10);
        }
    };

    useEffect(() => {
        console.log('실행되는지 확인');

        processVotes();
    }, [roomData]);

    const OpenSuggestedWord = () => {
        effectSound.current.playSound();
        setSuggestedWord(roomData.topic);
        setOpenResultSuggest(true);
    };

    const closeGameResult = () => {
        effectSound.current.playSound();
        setOpenResult(false);
    };

    const openGameResult = () => {
        effectSound.current.playSound();
        setOpenResult(true);
    };

    const closeSuggestedWord = () => {
        effectSound.current.playSound();
        setOpenResultSuggest(false);
    };

    const toggleGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleVisible(!isGameRuleVisible);
    };

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
        Element7,
    ];
    const gameResult = '시민';
    const playerVotes = roomData.shuffledPlayers.map((player) => ({
        ...player,
        votes: player.votes || 0,
    }));

    const maxVotes = Math.max(...playerVotes.map((player) => player.votes));
    const topPlayers = playerVotes.filter(
        (player) => player.votes === maxVotes
    );

    const isInvalidVote = topPlayers.length > 1;

    const topPlayer = isInvalidVote
        ? { name: '없음', job: '없음' }
        : topPlayers[0] || { name: '없음', job: '없음' };

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
                            {roomData.shuffledPlayers.map((player, index) => {
                                if (player.name === '') return null;

                                const ElementComponent =
                                    ElementComponents[index] || 'Element7';

                                const isTopPlayer = topPlayers.includes(player);

                                return (
                                    <Ele
                                        key={player.id}
                                        style={{
                                            backgroundColor: isTopPlayer
                                                ? '#a0a0a0'
                                                : '#dfdfdf',
                                        }}
                                    >
                                        <ElementComponent>
                                            {index + 1}
                                        </ElementComponent>
                                        <PlayerId
                                            style={{
                                                color: isTopPlayer
                                                    ? 'red'
                                                    : 'black',
                                            }}
                                        >
                                            {player.name}
                                        </PlayerId>
                                    </Ele>
                                );
                            })}

                            <Ele>
                                <Element7>
                                    <span>{timer} 초</span>
                                </Element7>
                                <PlayerId>Skip</PlayerId>
                            </Ele>
                        </DetailCategory>
                        <GameRuleWindow onClick={toggleGameRule} />
                    </Category>
                    <Screen>
                        <SuggesteWord>
                            <Title>투표</Title>
                            <Content>투표 완료</Content>
                        </SuggesteWord>
                        <PlayerList>
                            {roomData.shuffledPlayers.map((player, index) => {
                                if (player.name === '') return null;

                                const PlayerComponent =
                                    PlayerComponents[index] || 'div';
                                const NumberIconComponent =
                                    NumberIconComponents[index] || 'div';

                                const isTopPlayer = topPlayers.includes(player);
                                const isEliminated =
                                    !isTopPlayer && player.votes > 0;
                                return (
                                    <PlayerComponent
                                        key={player.id}
                                        style={{
                                            backgroundColor: isEliminated
                                                ? '#a0a0a0'
                                                : '#ffffff',
                                        }}
                                    >
                                        <PlayerName
                                            isTopPlayer={isTopPlayer}
                                            isEliminated={isEliminated}
                                        >
                                            <NumberIconComponent>
                                                {index + 1}
                                            </NumberIconComponent>
                                            <div className="name">
                                                {player.name}
                                            </div>
                                        </PlayerName>
                                        <VotingResult isTopPlayer={isTopPlayer}>
                                            {player.votes || 0} 표
                                        </VotingResult>
                                    </PlayerComponent>
                                );
                            })}
                        </PlayerList>
                        <Result>
                            {isInvalidVote ? (
                                <div className="invalidVote1">
                                    <div className="invalidVote2">무효표: </div>{' '}
                                    탈락자가 없습니다.
                                </div>
                            ) : (
                                <div className="ALL">
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
                                    </div>
                                    입니다.
                                    {topPlayer.job === '라이어' && (
                                        <ButtonContainer>
                                            <RoomOut onClick={openGameResult}>
                                                나가기
                                            </RoomOut>
                                            <ViewResult
                                                onClick={OpenSuggestedWord}
                                            >
                                                제시어
                                            </ViewResult>
                                        </ButtonContainer>
                                    )}
                                </div>
                            )}
                        </Result>
                        {openResult && (
                            <GameResult
                                result={gameResult}
                                onClose={closeGameResult}
                                roomData={roomData}
                            />
                        )}{' '}
                        {openResultSuggest && (
                            <SuggestedWord
                                word={suggestedWord}
                                wordSubTopic={subTopic}
                                onClose={closeSuggestedWord}
                            />
                        )}
                        {isGameRuleVisible && (
                            <GameRule onClose={toggleGameRule} />
                        )}
                    </Screen>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
        </>
    );
};

export default VotingFinish;
