import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GameRule from './GameRule';
import EffectSound from './EffectSound';
import logoImage from '../assets/logo.png';
import ChatingIcon from '../assets/chatIcon.png';
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
    Element3,
    Element4,
    Element5,
    Element6,
    Element7,
    GameRuleWindow,
    WarningText,
    WarningIcons,
    Screen,
    Ele,
    SuggestedWord,
    PlayerId,
    Title,
    Conversation,
    Content1,
    ChatContainer,
    Content2,
    SuggestedWordCheck,
    ChatIcon,
    Input,
    InputButton,
    ClockIcon,
    Chat,
} from '../css/GameDiscussCss.js';
import { Logo as GameLogo, LogoContainer, GameName } from '../css/GameRoom.js';

const GameDiscuss = () => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [timer, setTimer] = useState(1);
    const [secondTimer, setSecondTimer] = useState(10);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [shuffledPlayers, setShuffledPlayers] = useState([]);
    const [isTimerVisible, setIsTimerVisible] = useState(true);
    const [isSecondTimerVisible, setIsSecondTimerVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const effectSound = useRef(null);
    const chatContainerRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const roomData = location.state;
    //임시 더미
    const PlayerList = [
        { id: 'player1', name: 'mubin', votes: 0, job: '' },
        { id: 'player2', name: 'yurim', votes: 0, job: '' },
        { id: 'player3', name: 'yurim', votes: 0, job: '' },
        { id: 'player4', name: '', votes: 0, job: '' },
        { id: 'player5', name: '', votes: 0, job: '' },
        { id: 'player6', name: '', votes: 0, job: '' },
    ];

    useEffect(() => {
        if (roomData.shuffledPlayers) {
            setShuffledPlayers(roomData.shuffledPlayers);
        }
    }, [roomData.shuffledPlayers]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    setIsTimerVisible(false);
                    setIsSecondTimerVisible(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isSecondTimerVisible) {
            const secondInterval = setInterval(() => {
                setSecondTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(secondInterval);
                        navigate('/liar-find', {
                            state: { ...roomData, shuffledPlayers },
                        });
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(secondInterval);
        }
    }, [isSecondTimerVisible, shuffledPlayers, navigate, roomData]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };

    const handleInputChange = (e) => {
        setCurrentMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (!isSending && currentMessage.trim() !== '') {
            setIsSending(true);
            setMessages((prevMessages) => [...prevMessages, currentMessage]);
            setCurrentMessage('');
            setTimeout(() => setIsSending(false), 500);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClickSend = () => {
        handleSendMessage();
    };

    const progress = ((100 - secondTimer) / 100) * 100;
    const timerColor = secondTimer <= 10 ? 'red' : 'black';

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
                            <GameLogo>
                                <LogoContainer>
                                    <img
                                        className="logo"
                                        src={logoImage}
                                        alt="LikeLiar"
                                    />
                                    <p className="miniTitle">[ 방 제목 ]</p>
                                </LogoContainer>
                                <GameName>
                                    {roomData.roomData.data.roomName}
                                </GameName>
                            </GameLogo>
                        </ProfileBack>
                        <DetailCategory>
                            {PlayerList.map((player, index) => {
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
                            {isSecondTimerVisible && (
                                <Ele>
                                    <Element7>
                                        <ClockIcon progress={progress} />
                                    </Element7>
                                    <PlayerId style={{ color: timerColor }}>
                                        <span>{secondTimer} 초</span>
                                    </PlayerId>
                                </Ele>
                            )}
                        </DetailCategory>
                        <GameRuleWindow onClick={openGameRule} />
                    </Category>
                    {isTimerVisible ? (
                        <Screen>
                            <SuggestedWord>
                                <Title>주제</Title>
                                <Content>
                                    {roomData.roomData.data.subject}
                                </Content>
                            </SuggestedWord>
                            <SuggestedWordCheck>
                                <Content1>
                                    <div className="content1">제시어</div>
                                    <div className="content2">에 대해</div>
                                </Content1>
                                <Content2>
                                    <div className="content1">100초! 동안</div>
                                    <div className="content2">토론하기</div>
                                </Content2>
                            </SuggestedWordCheck>
                            <Warning>
                                <WarningIcons />
                                <WarningText>
                                    <div className="Timer">
                                        {timer}초 뒤에 토론이 시작됩니다.
                                    </div>
                                </WarningText>
                            </Warning>
                        </Screen>
                    ) : (
                        <Screen>
                            <SuggestedWord>
                                <Title>주제</Title>
                                <Content>
                                    {roomData.roomData.data.subject}
                                </Content>
                            </SuggestedWord>
                            <Conversation ref={chatContainerRef}>
                                {messages.map((message, index) => (
                                    <div
                                        className="ConversationList"
                                        key={index}
                                        style={{ whiteSpace: 'pre-wrap' }}
                                    >
                                        {message}
                                    </div>
                                ))}
                            </Conversation>
                            <ChatContainer>
                                <ChatIcon>
                                    <img
                                        className="IconSize"
                                        src={ChatingIcon}
                                        alt="icon"
                                    />
                                </ChatIcon>
                                <Chat>
                                    <Input
                                        id="messageInput"
                                        type="text"
                                        placeholder="채팅을 입력해주세요."
                                        maxLength={100}
                                        value={currentMessage}
                                        onKeyDown={handleKeyDown}
                                        onChange={handleInputChange}
                                    />
                                    <InputButton onClick={handleClickSend}>
                                        전송
                                    </InputButton>
                                </Chat>
                                <div className="under">
                                    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                </div>
                            </ChatContainer>
                        </Screen>
                    )}
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule closeGameRule={closeGameRule} />}
        </>
    );
};

export default GameDiscuss;
