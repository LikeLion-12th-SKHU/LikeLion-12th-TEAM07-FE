import React, { useState, useEffect, useRef } from 'react';
import GameRule from './GameRule';
import { useNavigate, useLocation } from 'react-router-dom';
import EffectSound from './EffectSound';
import logoImage from '../assets/logo.png';
import image from '../assets/돋보기.png';
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

const subtopics = {
    '신체 건강': [
        '운동',
        '영양',
        '다이어트',
        '수분 섭취',
        '체력',
        '유연성',
        '근력',
        '심폐 지구력',
        '대사',
        '근육',
    ],
    '정신 건강': [
        '스트레스 관리',
        '명상',
        '요가',
        '상담',
        '감정 조절',
        '우울증',
        '불안',
        '정신 치료',
        '마음 챙김',
        '긍정적 사고',
    ],
    '예방 및 관리': [
        '건강검진',
        '예방 접종',
        '검진',
        '정기 검사',
        '스크리닝',
        '건강 보험',
        '예방 의학',
        '건강 관리 계획',
        '병원',
        '클리닉',
    ],
    식생활: [
        '영양소',
        '비타민',
        '미네랄',
        '항산화제',
        '식단',
        '건강 식품',
        '슈퍼푸드',
        '식이섬유',
        '단백질',
        '저지방',
    ],
    '생활 습관': [
        '수면',
        '휴식',
        '규칙적인 생활',
        '위생',
        '금연',
        '절주',
        '스트레칭',
        '걷기',
        '재충전',
        '자외선 차단',
    ],
    '질병 및 치료': [
        '면역력',
        '감염',
        '염증',
        '항생제',
        '백신',
        '수술',
        '약물',
        '재활',
        '물리치료',
        '응급처치',
    ],
    '건강 상태': [
        '심혈관',
        '혈압',
        '콜레스테롤',
        '당뇨',
        '비만',
        '골다공증',
        '관절염',
        '천식',
        '알레르기',
        '소화',
    ],
};

const getRandomSubtopic = (topic) => {
    const topics = subtopics[topic] || [];
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex] || '';
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
    const [timer, setTimer] = useState(30); // 타이머 상태 20초
    const [containers, setContainers] = useState([]);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [currentSubtopic, setCurrentSubtopic] = useState('');
    const [shuffledPlayers, setShuffledPlayers] = useState([]);
    const [isRandomized, setIsRandomized] = useState(false);
    const [currentPlayerRole, setCurrentPlayerRole] = useState('');

    const effectSound = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const roomData = location.state || {};

    const PlayerList = [
        { id: 'player1', name: 'mubin', votes: 0, job: '' },
        { id: 'player2', name: 'yurim', votes: 0, job: '' },
        { id: 'player3', name: 'seoyun', votes: 0, job: '' },
        { id: 'player4', name: 'seoyun', votes: 0, job: '' },
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
        if (roomData.topic) {
            setCurrentSubtopic(getRandomSubtopic(roomData.topic));
        }
    }, [roomData.topic]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    navigate('/game-discuss', {
                        state: {
                            ...roomData,
                            shuffledPlayers,
                            subTopic: currentSubtopic,
                        },
                    });
                    setIsRandomized(true);
                    return 60;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [navigate, roomData, shuffledPlayers]);

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
                                <GameName>{roomData.name}</GameName>
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
                            <Content>{roomData.topic}</Content>
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
                                                                }
                                                            </div>
                                                            <div className="subBody3">
                                                                이란?
                                                            </div>
                                                        </div>
                                                        <div className="subBody4">
                                                            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                                        </div>
                                                        <Sub>
                                                            제시어에 대한 설명이
                                                            적힐 곳
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
                                                            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
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
