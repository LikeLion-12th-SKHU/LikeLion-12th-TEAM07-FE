import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameRule from './GameRule';
import Profile from './Profile';
import EffectSound from './EffectSound';
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
    ElementS,
    ElementRank,
    GameRuleWindow,
} from '../css/LobbyCss.js';
import {
    CreateGameContainer,
    Row1,
    Row2,
    Row3,
    DetailBox,
    Label,
    Input,
    InputTitle,
    TextArea,
    CreateButton,
    Cancel,
    CustomSelect,
} from '../css/SettingNewGameCss.js';

const topics = [
    '신체 건강',
    '정신 건강',
    '예방 및 관리',
    '식생활',
    '생활 습관',
    '질병 및 치료',
    '건강 상태',
];

const CreateGame = ({ onCreate, onClose, openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const effectSound = useRef(null);
    const navigate = useNavigate();
    const [gameName, setGameName] = useState('');
    const [playerCount, setPlayerCount] = useState(2);
    const [votingTimeLimit, setVotingTimeLimit] = useState(10);
    const [description, setDescription] = useState('');
    const [selectedTopic, setSelectedTopic] = useState(topics[0]);

    const handleCreateGame = () => {
<<<<<<< HEAD
        effectSound.current.playSound(); // 이펙트 소리 재생
        setTimeout(() => {
            if (gameName && playerCount && votingTimeLimit) {
                const newRoom = {
                    id: Date.now(),
                    name: gameName,
                    playerCount,
                    votingTimeLimit,
                    description,
                    topic: selectedTopic,
                };
                if (typeof onCreate === 'function') {
                    onCreate(newRoom); // 방 추가
                    navigate(`/room/${newRoom.id}`, { state: newRoom }); // 방의 상세 페이지로 이동
                } else {
                    console.error('방추가실패');
                }
            } else {
                alert('항목들을 모두 입력해주세요.');
            }
        }, 140);
=======
        if (gameName && playerCount && votingTimeLimit) {
            const newRoom = {
                id: Date.now(),
                name: gameName,
                playerCount,
                votingTimeLimit,
                description,
                topic: selectedTopic,
            };
            if (typeof onCreate === 'function') {
                onCreate(newRoom); // 방 추가
                navigate(`/room/${newRoom.id}`, { state: newRoom }); // 방의 상세 페이지로 이동
            } else {
                console.error('방추가실패');
            }
        } else {
            alert('항목들을 모두 입력해주세요.');
        }
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
    };

    // 게임 룰 열기 핸들러
    const openGameRule = () => {
        effectSound.current.playSound(); // 이펙트 소리 재생
        setIsGameRuleOpen(true);
    };

    // 게임 룰 닫기 핸들러
    const closeGameRule = () => {
        effectSound.current.playSound(); // 이펙트 소리 재생
        setIsGameRuleOpen(false);
    };

    // 설정 열기 핸들러
    const handleOpenSettings = () => {
        effectSound.current.playSound(); // 이펙트 소리 재생
        openSettings(); // 전달받은 openSettings 함수 호출
    };
<<<<<<< HEAD
    const handleCreateRoomClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/create-game');
        }, 140);
    };
    const handleLobbyClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/');
        }, 140);
    };
    const handleHomeClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/Home-go');
        }, 140);
    };
    const handleRankingClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/Ranking-go');
        }, 140);
    };

    return (
        <>
=======

    return (
        <>
            <BackGroundColor />
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
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
<<<<<<< HEAD
                            <ElementL onClick={handleLobbyClick}>로비</ElementL>
                            <ElementR onClick={handleCreateRoomClick}>
                                방 만들기
                            </ElementR>
                            <ElementH onClick={handleHomeClick}>
=======
                            <ElementL onClick={() => navigate('/')}>
                                로비
                            </ElementL>
                            <ElementR onClick={() => navigate('/create-game')}>
                                방 만들기
                            </ElementR>
                            <ElementH onClick={() => navigate('/Home-go')}>
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                                홈으로 가기
                            </ElementH>
                            <ElementS onClick={handleOpenSettings}>
                                설정
                            </ElementS>
<<<<<<< HEAD
                            <ElementRank onClick={handleRankingClick}>
=======
                            <ElementRank
                                onClick={() => navigate('/Ranking-go')}
                            >
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                                랭킹 보기
                            </ElementRank>
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    <CreateGameContainer>
                        <Row1>
                            <Label htmlFor="gameName">방 제목</Label>
                            <InputTitle
                                id="gameName"
                                type="text"
                                placeholder="10글자 이내"
                                maxLength={10}
                                value={gameName}
                                onChange={(e) => setGameName(e.target.value)}
                            />
                        </Row1>
                        <Row2>
                            <DetailBox>
                                <Label htmlFor="playerCount">플레이어 수</Label>
                                <Input
                                    id="playerCount"
                                    type="number"
<<<<<<< HEAD
                                    min="2"
                                    max="6"
=======
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                                    value={playerCount}
                                    onChange={(e) =>
                                        setPlayerCount(Number(e.target.value))
                                    }
                                />
                            </DetailBox>
                            <DetailBox>
                                <Label htmlFor="votingTimeLimit">
                                    투표 시간(초)
                                </Label>
                                <Input
                                    id="votingTimeLimit"
                                    type="number"
                                    min="10"
                                    max="15"
                                    value={votingTimeLimit}
                                    onChange={(e) => {
                                        const value = Math.max(
                                            10,
                                            Math.min(15, Number(e.target.value))
                                        );
                                        setVotingTimeLimit(value);
                                    }}
                                />
                            </DetailBox>
                            <DetailBox>
                                <Label htmlFor="topic">주제</Label>
                                <CustomSelect
                                    id="topic-select"
                                    value={selectedTopic}
                                    onChange={(e) =>
                                        setSelectedTopic(e.target.value)
                                    }
                                >
                                    {topics.map((topic) => (
                                        <option key={topic} value={topic}>
                                            {topic}
                                        </option>
                                    ))}
                                </CustomSelect>
                            </DetailBox>
                        </Row2>
                        <Row3>
                            <Label htmlFor="description">게임방 설명</Label>
                            <TextArea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Row3>
                        <Row2>
<<<<<<< HEAD
                            <Cancel onClick={handleLobbyClick}>취소</Cancel>
=======
                            <Cancel onClick={onClose}>취소</Cancel>
>>>>>>> b7e3053cb4bc170b979189bf3334373aacf648a6
                            <CreateButton onClick={handleCreateGame}>
                                방 만들기
                            </CreateButton>
                        </Row2>
                    </CreateGameContainer>
                    <EffectSound ref={effectSound} />
                </LobbyBody>
            </Container>
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default CreateGame;
