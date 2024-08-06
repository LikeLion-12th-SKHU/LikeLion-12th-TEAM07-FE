import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import EffectSound from './EffectSound';
import GameRule from './GameRule';
import logoImage from '../assets/logo.png';
import GameResult from '../components/GameResult';
import SuggestedWord from '../components/SuggestedWord';

import {
    Container,
    Header,
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
    SubTopicList,
    Element7,
    ViewResult,
    Screen,
    Victory,
    SubTopics,
    Ele,
    ButtonContainer,
    SuggesteWord,
    PlayerId,
    Title,
    GameRuleWindow,
    RoomOut,
    Result,
} from '../css/FinalMatchCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';

const wordLists = {
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

const FinalMatch = () => {
    const location = useLocation();
    const [selectedWord, setSelectedWord] = useState(null);
    const [gameResult, setGameResult] = useState(null);
    const [isGameRuleVisible, setIsGameRuleVisible] = useState(false);
    const [timer, setTimer] = useState(15); // 타이머 초기값 설정
    const [buttonsDisabled, setButtonsDisabled] = useState(false); // 버튼 비활성화 상태
    const effectSound = useRef(null);
    const navigate = useNavigate();
    const [openResult, setOpenResult] = useState(false);
    const [openResultSuggest, setOpenResultSuggest] = useState(false);
    const [suggestedWord, setSuggestedWord] = useState('');

    const {
        roomData = {
            topic: '기본 주제',
            votingTimeLimit: 20,
            name: '기본 방 이름',
            playerCount: 6,
            shuffledPlayers: [],
        },
        subTopic = '없음',
    } = location.state || {};
    const words = wordLists[roomData.topic] || [];

    const handleTopicClick = (word) => {
        if (!buttonsDisabled) {
            setSelectedWord(word);
        }
    };

    useEffect(() => {
        const finalizeTimer = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(finalizeTimer);
                    // 최종 선택된 결과에 따라 처리
                    if (selectedWord === subTopic) {
                        setGameResult('라이어');
                    } else {
                        setGameResult('시민');
                    }
                    setButtonsDisabled(true); // 타이머 종료 시 버튼 비활성화
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(finalizeTimer);
    }, [selectedWord, subTopic]);

    const closeGameResult = () => {
        effectSound.current.playSound();
        setOpenResult(false);
    };

    const openGameResult = () => {
        effectSound.current.playSound();
        setOpenResult(true);
    };

    const OpenSuggestedWord = () => {
        effectSound.current.playSound();
        setSuggestedWord(roomData.topic);
        setOpenResultSuggest(true);
    };

    const closeSuggestedWord = () => {
        effectSound.current.playSound();
        setOpenResultSuggest(false);
    };

    const toggleGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleVisible(!isGameRuleVisible);
    };

    const ElementComponents = [
        Element1,
        Element2,
        Element3,
        Element4,
        Element5,
        Element6,
        Element7,
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
                        <DetailCategory>
                            {roomData.shuffledPlayers.map((player, index) => {
                                if (player.name === '') return null;

                                const ElementComponent =
                                    ElementComponents[index] || Element7;

                                return (
                                    <Ele
                                        key={player.id}
                                        style={{ backgroundColor: '#dfdfdf' }}
                                    >
                                        <ElementComponent>
                                            {index + 1}
                                        </ElementComponent>
                                        <PlayerId>{player.name}</PlayerId>
                                    </Ele>
                                );
                            })}
                        </DetailCategory>
                        <GameRuleWindow onClick={toggleGameRule} />
                    </Category>
                    <Screen>
                        <SuggesteWord>
                            <Title>Final🔥</Title>
                            <Content>제시어를 선택하세요</Content>
                        </SuggesteWord>
                        <SubTopicList>
                            {words.map((topic, index) => (
                                <SubTopics
                                    key={index}
                                    isSelected={selectedWord === topic}
                                    onClick={() => handleTopicClick(topic)}
                                    disabled={buttonsDisabled}
                                >
                                    {topic}
                                </SubTopics>
                            ))}
                        </SubTopicList>

                        <Result>
                            <div className="ALL">
                                {timer > 0 ? (
                                    <>
                                        <div
                                            style={{
                                                color:
                                                    timer <= 10
                                                        ? 'red'
                                                        : 'black',
                                            }}
                                        >
                                            {timer}
                                        </div>
                                        초 남았습니다.
                                    </>
                                ) : (
                                    <Victory>
                                        <b
                                            className="vitory"
                                            style={{
                                                color:
                                                    gameResult === '라이어'
                                                        ? 'red'
                                                        : 'green',
                                            }}
                                        >
                                            {gameResult}
                                        </b>
                                        <div>승리</div>
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
                                    </Victory>
                                )}
                            </div>
                        </Result>
                    </Screen>
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {openResult && (
                <GameResult
                    result={gameResult}
                    onClose={closeGameResult}
                    roomData={roomData}
                />
            )}
            {openResultSuggest && (
                <SuggestedWord
                    word={suggestedWord}
                    wordSubTopic={subTopic}
                    onClose={closeSuggestedWord}
                />
            )}
            {isGameRuleVisible && <GameRule onClose={toggleGameRule} />}
        </>
    );
};

export default FinalMatch;
