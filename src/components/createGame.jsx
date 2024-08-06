import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameRule from './GameRule';
import Profile from './Profile';
import EffectSound from './EffectSound';
import axiosInstance from '../utils/apiConfig';
import {
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
    Count,
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
    const [playerCount, setPlayerCount] = useState(3);
    const [votingTimeLimit, setVotingTimeLimit] = useState(10);
    const [description, setDescription] = useState('');
    const [selectedTopic, setSelectedTopic] = useState(topics[0]);
    const [saveRoom, setSaveRoom] = useState([]);

    const handleCreateGame = async () => {
        effectSound.current.playSound(); // 이펙트 소리 재생
        setTimeout(async () => {
            if (gameName && playerCount) {
                const newRoom = {
                    roomName: gameName,
                    playerNumber: playerCount,
                    subject: selectedTopic,
                    content: description,
                };
                console.log('게임 정보입니다.', newRoom);
                try {
                    const response = await axiosInstance.post(
                        '/rooms',
                        newRoom
                    );
                    if (response.data) {
                        const roomData = response.data.data;

                        setSaveRoom(roomData);

                        console.log('방 생성 성공:', roomData);

                        if (typeof onCreate === 'function') {
                            onCreate(response.data);
                        }

                        navigate(`/room/${roomData.roomId}`, {
                            state: response.data,
                        });
                    } else {
                        console.error('방 생성 응답에 방 ID가 없습니다.');
                    }
                } catch (error) {
                    console.error('방 생성 실패:', error);
                }
            } else {
                alert('항목들을 모두 입력해주세요.');
            }
        }, 140);
    };

    useEffect(() => {
        if (saveRoom) {
            console.log(saveRoom);
        }
    }, [saveRoom]);

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    const handleOpenSettings = () => {
        effectSound.current.playSound();
        openSettings();
    };

    const handleCreateRoomClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/create-game');
        }, 140);
    };

    const handleLobbyClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            navigate('/lobby');
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
                            <ElementR onClick={handleCreateRoomClick}>
                                방 만들기
                            </ElementR>
                            <ElementH onClick={handleHomeClick}>
                                홈으로 가기
                            </ElementH>
                            <ElementS onClick={handleOpenSettings}>
                                설정
                            </ElementS>
                            <ElementRank onClick={handleRankingClick}>
                                랭킹 보기
                            </ElementRank>
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    <Count>
                        <CreateGameContainer>
                            <Row1>
                                <Label htmlFor="gameName">방 제목</Label>
                                <InputTitle
                                    id="gameName"
                                    type="text"
                                    placeholder="7글자 이내"
                                    maxLength={7}
                                    value={gameName}
                                    onChange={(e) =>
                                        setGameName(e.target.value)
                                    }
                                />
                            </Row1>
                            <Row2>
                                <DetailBox>
                                    <Label htmlFor="playerCount">
                                        플레이어 수
                                    </Label>
                                    <Input
                                        id="playerCount"
                                        type="number"
                                        min="3"
                                        max="6"
                                        value={playerCount}
                                        onChange={(e) =>
                                            setPlayerCount(
                                                Number(e.target.value)
                                            )
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
                                                Math.min(
                                                    15,
                                                    Number(e.target.value)
                                                )
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
                                <Label htmlFor="description">
                                    게임방 설명 ( 최대 700자 )
                                </Label>
                                <TextArea
                                    id="description"
                                    value={description}
                                    placeholder="최대 700자"
                                    maxLength={700}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </Row3>
                            <Row2>
                                <Cancel onClick={handleLobbyClick}>취소</Cancel>
                                <CreateButton onClick={handleCreateGame}>
                                    방 만들기
                                </CreateButton>
                            </Row2>
                        </CreateGameContainer>
                    </Count>
                    <EffectSound ref={effectSound} />
                </LobbyBody>
            </Container>
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default CreateGame;
