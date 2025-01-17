import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GameRule from './GameRule';
import EffectSound from './EffectSound';
import logoImage from '../assets/logo.png';

import {
    Container,
    Header,
    LogoButton,
    LobbyBody,
    Category,
    Logo,
    ProfileBack,
    DetailCategory,
    ElementL,
    ElementR,
    ElementH,
    LogoContainer,
    GameRuleWindow,
    GameName,
} from '../css/GameRoom.js';
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

const RoomSettings = ({ onUpdate, onClose, openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const effectSound = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const roomData = location.state || {}; // 방 데이터 가져오기

    const [gameName, setGameName] = useState(roomData.name || '');
    const [playerCount, setPlayerCount] = useState(roomData.playerCount || 2);
    const [votingTimeLimit, setVotingTimeLimit] = useState(
        roomData.votingTimeLimit || 10
    );
    const [description, setDescription] = useState(roomData.description || '');
    const [selectedTopic, setSelectedTopic] = useState(
        roomData.topic || topics[0]
    );

    const handleUpdateGame = () => {
        if (gameName && playerCount && votingTimeLimit) {
            const updateRoom = {
                id: roomData.id,
                name: gameName,
                playerCount,
                votingTimeLimit,
                description,
                topic: selectedTopic,
            };

            if (typeof onUpdate === 'function') {
                try {
                    onUpdate(updateRoom);
                    navigate(`/room/${updateRoom.id}`, { state: updateRoom });
                } catch (error) {
                    console.error('방 업데이트 중 오류 발생:', error);
                    alert('방 업데이트 중 오류가 발생했습니다.');
                }
            } else {
                console.error('onUpdate 함수가 정의되지 않았습니다.');
            }
        } else {
            alert('항목들을 모두 입력해주세요.');
        }
    };
    const lobby = () => {
        effectSound.current.playSound();
        navigate('/lobby');
    };
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
                            <ElementL onClick={lobby}>방 나가기</ElementL>
                            <ElementR onClick={handleOpenSettings}>
                                방 설정
                            </ElementR>
                            <ElementH
                                onClick={() => {
                                    effectSound.current.playSound();
                                    openSettings();
                                }}
                            >
                                설정
                            </ElementH>
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    <CreateGameContainer>
                        <Row1>
                            <Label htmlFor="gameName">방 제목</Label>
                            <InputTitle
                                id="gameName"
                                type="text"
                                placeholder="7글자 이내"
                                maxLength={7}
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
                                    max="6"
                                    min="3"
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
                            <Label htmlFor="description">
                                게임방 설명 ( 최대 700자 )
                            </Label>
                            <TextArea
                                id="description"
                                value={description}
                                maxLength={900}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Row3>
                        <Row2>
                            <Cancel onClick={() => navigate(-1)}>취소</Cancel>
                            <CreateButton onClick={handleUpdateGame}>
                                확인
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

export default RoomSettings;
