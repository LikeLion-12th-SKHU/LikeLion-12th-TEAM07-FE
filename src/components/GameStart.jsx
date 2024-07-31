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
    Num,
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
    Sub,
    Element3,
    GameRuleWindow,
    CheckTopicButton,
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
    SuggestedWordCheck,
} from '../css/GameStartCss.js';
import { Logo, LogoContainer, GameName } from '../css/GameRoom.js';
const GameStart = ({ openSettings }) => {
    const [isGameRuleOpen, setIsGameRuleOpen] = React.useState(false);
    const [timer, setTimer] = useState(60); // 타이머 상태 1분
    const effectSound = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const roomData = location.state || {};

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    return navigate('/game-discuss', { state: roomData }); // 타이머가 0초가 되면 60초로 리셋
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
    }, []);
    const progress = ((60 - timer) / 60) * 100;
    const timerColor = timer <= 10 ? 'red' : 'black';

    const openGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(true);
    };

    const closeGameRule = () => {
        effectSound.current.playSound();
        setIsGameRuleOpen(false);
    };
    const [containers, setContainers] = useState([]);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const addContainer = () => {
        setContainers([...containers, `Container ${containers.length + 1}`]);
        setIsButtonVisible(false); // 버튼을 클릭하면 숨기기
    };
    const CheckTopicButtonClick = () => {
        effectSound.current.playSound();
        setTimeout(() => {
            addContainer();
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
                            <Ele>
                                <Element1>. . .</Element1>
                                <PlayerId>mubin</PlayerId>
                            </Ele>
                            <Ele>
                                <Element2>. . .</Element2>
                                <PlayerId>yurim</PlayerId>
                            </Ele>
                            <Ele>
                                <Element3>. . .</Element3>
                                <PlayerId>seoyun</PlayerId>
                            </Ele>

                            <Ele>
                                <Element4>. . .</Element4>
                                <PlayerId>giwoong</PlayerId>
                            </Ele>

                            <Ele>
                                <Element5>. . .</Element5>
                                <PlayerId>giwoong</PlayerId>
                            </Ele>
                            <Ele>
                                <Element6>. . .</Element6>
                                <PlayerId>giwoong</PlayerId>
                            </Ele>
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
                                    <div className="AfterClick" key={index}>
                                        <AfterClickContents>
                                            <TopicAndNum>
                                                <img
                                                    className="image"
                                                    src={image}
                                                    alt="LikLiar"
                                                />
                                                <Topic>제시어 - (제시어)</Topic>
                                                <Num>순서 - (랜덤 숫자)</Num>
                                            </TopicAndNum>
                                            {/* 제시어 순서 */}
                                            <SubStance>
                                                <div className="subBody1">
                                                    <div className="subBody2">
                                                        (제시어)
                                                    </div>
                                                    <div className="subBody3">
                                                        이란?
                                                    </div>
                                                </div>
                                                <div className="subBody4">
                                                    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                                </div>
                                                <Sub>
                                                    제시어에 대한 설명 적힐 곳
                                                </Sub>
                                            </SubStance>
                                            {/* 제시어에 대한 설명 */}
                                        </AfterClickContents>
                                    </div>
                                ))}
                            </After>
                            {isButtonVisible && (
                                <CheckTopicButton
                                    onClick={CheckTopicButtonClick}
                                >
                                    제시어 확인
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
                                    {timer}초
                                </div>
                                <div>동안 제시어와 순번을 확인해주세요.</div>
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
