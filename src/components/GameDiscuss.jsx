import React, { useState, useEffect, useRef } from 'react';
import GameRule from './GameRule';
import { useNavigate, useLocation } from 'react-router-dom';
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
    GameRuleWindow,
    Element4,
    WarningText,
    Element5,
    Element6,
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
    Element7,
    ClockIcon,
    Chat,
    InputButton,
} from '../css/GameDiscussCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';

const GameDiscuss = ({ openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = useState(false);
    const [timer, setTimer] = useState(10);
    const [secondTimer, setSecondTimer] = useState(100);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const effectSound = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const roomData = location.state || {};
    const [isTimerVisible, setIsTimerVisible] = useState(true);
    const [isSecondTimerVisible, setIsSecondTimerVisible] = useState(false);

    const chatContainerRef = useRef(null);

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
                        return navigate('/liar-find', { state: roomData });
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(secondInterval);
        }
    }, [isSecondTimerVisible]);

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
        if (currentMessage.trim() !== '') {
            setMessages([...messages, currentMessage]);
            setCurrentMessage('');
        }
    };

    const progress = ((100 - secondTimer) / 100) * 100;
    const timerColor = secondTimer <= 10 ? 'red' : 'black';

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
                            <Ele>
                                <Element1>1</Element1>
                                <PlayerId>mubin</PlayerId>
                            </Ele>
                            <Ele>
                                <Element2>2</Element2>
                                <PlayerId>yurim</PlayerId>
                            </Ele>
                            <Ele>
                                <Element3>3</Element3>
                                <PlayerId>seoyun</PlayerId>
                            </Ele>
                            <Ele>
                                <Element4>4</Element4>
                                <PlayerId>giwoong</PlayerId>
                            </Ele>
                            <Ele>
                                <Element5>5</Element5>
                                <PlayerId>giwoong</PlayerId>
                            </Ele>
                            <Ele>
                                <Element6>6</Element6>
                                <PlayerId>giwoong</PlayerId>
                            </Ele>
                            {isSecondTimerVisible && (
                                <Ele>
                                    <Element7>
                                        <ClockIcon
                                            progress={progress}
                                        ></ClockIcon>
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
                                <Content>{roomData.topic}</Content>
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
                                <Content>{roomData.topic}</Content>
                            </SuggestedWord>
                            <Conversation ref={chatContainerRef}>
                                {messages.map((message, index) => (
                                    <div
                                        className="ConversationList"
                                        key={index}
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
                                        onChange={handleInputChange}
                                    />
                                    <InputButton onClick={handleSendMessage}>
                                        전송
                                    </InputButton>
                                </Chat>
                                <div className="under">
                                    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                </div>
                            </ChatContainer>
                        </Screen>
                    )}
                </LobbyBody>
            </Container>
            <EffectSound ref={effectSound} />
            {isGameRuleOpen && <GameRule onClose={closeGameRule} />}
        </>
    );
};

export default GameDiscuss;
