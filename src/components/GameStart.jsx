import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import EffectSound from './EffectSound';
import logoImage from '../assets/logo.png';
import image from '../assets/돋보기.png';

import axiosInstance from '../utils/apiConfig'; // axiosInstance를 사용하여 API 호출
import {
    Container,
    Warning,
    SubStance,
    Header,
    LogoButton,
    Job,
    LobbyBody,
    Category,
    TopicAndNum,
    ProfileBack,
    After,
    Content,
    DetailCategory,
    Topic,
    AfterClickContents,
    Element1,
    Element2,
    Element3,
    GameRuleWindow,
    CheckTopicButton,
    Element4,
    WarningText,
    Element5,
    Element6,
    WarningIcons,
    JobLiar,
    Screen,
    Ele,
    SuggestedWord,
    PlayerId,
    LiarContent,
    Title,
    SuggestTopic,
    SuggestedWordCheck,
    Sub,
} from '../css/GameStartCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';
import GameRule from './GameRule';

const fetchRandomWord = async (subject) => {
    try {
        const response = await axiosInstance.get(
            `/words/one?subject=${subject}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return '';
    }
};

const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
};

const assignRoles = (players) => {
    const shuffledPlayers = shuffleArray(players);
    const liarIndex = Math.floor(Math.random() * shuffledPlayers.length);
    return shuffledPlayers.map((player, index) => ({
        ...player,
        job: index === liarIndex ? '라이어' : '시민',
    }));
};

const GameStart = ({ openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [timer, setTimer] = useState(20); // 타이머 상태 30초
    const [containers, setContainers] = useState([]);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [currentSubtopic, setCurrentSubtopic] = useState('');
    const [shuffledPlayers, setShuffledPlayers] = useState([]);
    const [isRandomized, setIsRandomized] = useState(false);
    const [currentPlayerRole, setCurrentPlayerRole] = useState('');

    const effectSound = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const roomData = location.state;

    const PlayerList = [
        { id: 'player1', name: 'mubin', votes: 0, job: '' },
        { id: 'player2', name: 'yurim', votes: 0, job: '' },
        { id: 'player3', name: 'yurim', votes: 0, job: '' },
        { id: 'player4', name: '', votes: 0, job: '' },
        { id: 'player5', name: '', votes: 0, job: '' },
        { id: 'player6', name: '', votes: 0, job: '' },
    ];

    useEffect(() => {
        if (!isRandomized) {
            const fixedPlayers = PlayerList.filter((player) => !player.name);
            const playersToShuffle = PlayerList.filter((player) => player.name);
            const playersWithRoles = assignRoles(playersToShuffle);

            const finalPlayersList = [...playersWithRoles, ...fixedPlayers];
            setShuffledPlayers(finalPlayersList);

            const currentPlayer = finalPlayersList.find(
                (player) => player.name === 'mubin'
            );
            if (currentPlayer) {
                setCurrentPlayerRole(currentPlayer.job);
            }
        }
    }, [isRandomized]);

    useEffect(() => {
        const fetchSubtopic = async () => {
            if (roomData.data.subject) {
                const word = await fetchRandomWord(roomData.data.subject);
                setCurrentSubtopic(word);
            }
        };

        fetchSubtopic();
    }, [roomData.data.subject]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    navigate('/game-discuss', {
                        state: {
                            roomData,
                        },
                    });
                    setIsRandomized(true);
                    return 60;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [navigate, roomData, shuffledPlayers, currentSubtopic]);

    const timerColor = timer <= 10 ? 'red' : 'black';

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    const LiarAddContainer = () => {
        setContainers([
            ...containers,
            {
                type: 'liar',
                content: `Liar Container ${containers.length + 1}`,
            },
        ]);
        setIsButtonVisible(false);
    };

    const addContainer = () => {
        setContainers([
            ...containers,
            {
                type: 'citizen',
                content: `Citizen Container ${containers.length + 1}`,
            },
        ]);
        setIsButtonVisible(false);
    };

    const CheckTopicButtonClick = () => {
        effectSound.current.playSound();
        if (currentPlayerRole === '시민') {
            setTimeout(() => {
                addContainer();
            }, 140);
        } else {
            setTimeout(() => {
                LiarAddContainer();
            }, 140);
        }
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
                            {shuffledPlayers.map((player, index) => {
                                const ElementComponents = [
                                    Element1,
                                    Element2,
                                    Element3,
                                    Element4,
                                    Element5,
                                    Element6,
                                ];
                                if (player.name === '') return null;
                                const Element =
                                    ElementComponents[index] || Element6;

                                return (
                                    <Ele key={index}>
                                        <Element>{index + 1}</Element>
                                        <PlayerId>{player.name || ''}</PlayerId>
                                    </Ele>
                                );
                            })}
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    <Screen>
                        <SuggestedWord>
                            <Title>주제</Title>
                            <Content>{roomData.data.subject}</Content>
                        </SuggestedWord>
                        <SuggestedWordCheck>
                            <After>
                                {containers.map((container, index) => (
                                    <div
                                        className={
                                            container.type === 'liar'
                                                ? 'liar-container'
                                                : 'container'
                                        }
                                        key={index}
                                    >
                                        {container.type === 'citizen' && (
                                            <div
                                                className="AfterClick"
                                                key={index}
                                            >
                                                <AfterClickContents>
                                                    <TopicAndNum>
                                                        <img
                                                            className="image"
                                                            src={image}
                                                            alt="LikLiar"
                                                        />
                                                        <Topic>
                                                            제시어 -{' '}
                                                            <SuggestTopic>
                                                                {
                                                                    currentSubtopic
                                                                        .data
                                                                        .vocabulary
                                                                }
                                                            </SuggestTopic>
                                                        </Topic>
                                                        <Job>
                                                            {' '}
                                                            # {index + 1}
                                                        </Job>
                                                    </TopicAndNum>
                                                    <SubStance>
                                                        <div className="subBody1">
                                                            <div className="subBody2">
                                                                {
                                                                    currentSubtopic
                                                                        .data
                                                                        .vocabulary
                                                                }
                                                            </div>
                                                            <div className="subBody3">
                                                                이란?
                                                            </div>
                                                        </div>
                                                        <div className="subBody4">
                                                            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                                        </div>
                                                        <Sub>
                                                            {
                                                                currentSubtopic
                                                                    .data
                                                                    .description
                                                            }
                                                        </Sub>
                                                    </SubStance>
                                                </AfterClickContents>
                                            </div>
                                        )}
                                        {container.type === 'liar' && (
                                            <div
                                                className="AfterClick"
                                                key={index}
                                            >
                                                <AfterClickContents>
                                                    <TopicAndNum>
                                                        <img
                                                            className="image"
                                                            src={image}
                                                            alt="LikLiar"
                                                        />
                                                        <LiarContent>
                                                            당신은
                                                            <div className="YourLiar">
                                                                라이어
                                                            </div>
                                                            입니다.
                                                        </LiarContent>
                                                        <JobLiar>
                                                            # {index + 1}
                                                        </JobLiar>
                                                    </TopicAndNum>
                                                    <SubStance>
                                                        <div className="subBody1">
                                                            <div className="subLiar">
                                                                라이어
                                                            </div>
                                                            <div className="subBody3">
                                                                이란?
                                                            </div>
                                                        </div>
                                                        <div className="subBody4">
                                                            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                                        </div>
                                                        <Sub>
                                                            라이어에 대한 설명이
                                                            적힐 곳
                                                        </Sub>
                                                    </SubStance>
                                                </AfterClickContents>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </After>
                            {isButtonVisible && (
                                <CheckTopicButton
                                    onClick={CheckTopicButtonClick}
                                >
                                    {' '}
                                    제시어 확인
                                    <img
                                        className="image"
                                        src={image}
                                        alt="LikLiar"
                                    />
                                </CheckTopicButton>
                            )}
                        </SuggestedWordCheck>
                        <Warning>
                            <WarningIcons />
                            <WarningText>
                                <div
                                    className="counter"
                                    style={{ color: timerColor }}
                                >
                                    {timer}
                                </div>
                                초 뒤에 토론이 시작됩니다.
                            </WarningText>
                        </Warning>
                    </Screen>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default GameStart;
