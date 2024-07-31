import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';
import backGround from '../assets/backImage.png';
import { PiWarningCircleFill } from 'react-icons/pi';
import blackboard from '../assets/blackboard.png';
export const Element7 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 60px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(221, 221, 221),
        rgb(181, 181, 181)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const ClockIcon = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(
        lightgrey ${(props) => props.progress}%,
        #2f3233 0%
    );
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Chat = styled.div`
    display: flex;
    justify-content: left;
`;
export const InputButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    cursor: pointer;
    border: none;
    height: 50px;
    margin-top: 20px;
    margin-right: 20px;
    background-color: #dddddd;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    background-image: linear-gradient(
        to right bottom,
        rgb(50, 182, 95),
        rgb(35, 131, 67)
    );
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);

    &:active {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(2px);
    }
`;
export const Input = styled.input`
    padding: 10px;
    color: #000000;
    font-size: 24px;
    border-radius: 5px;
    border: none; // 테두리 제거
    outline: none; // 포커스 시 생기는 기본 테두리 제거
    width: 90%;
    margin-top: 20px;
    margin-left: 20px;

    background-color: none; // 배경색 추가
`;
export const WarningIcons = styled(PiWarningCircleFill)`
    width: 40px;
    height: auto;
    color: #d42030;
    margin-right: 10px;
`;

export const subContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 40px;
`;

export const WarningText = styled.div`
    position: relative;
    bottom: -2px;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;

    .Timer {
        margin-left: 10px;
        font-size: 25px;
    }
`;
export const After = styled.div`
    .AfterClick {
        width: 1014px;
        height: 484px;
        border-radius: 35px;
        background-color: #a7a7a7;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;

export const Warning = styled.div`
    padding-left: 0;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 94%;
    margin-left: 3%;
    margin-top: 2%;
    height: 10%;
    background-color: none;
`;

export const Element1 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    height: 60px;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 98, 98),
        rgb(130, 49, 49)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element2 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    height: 60px;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(231, 148, 85),
        rgb(193, 91, 13)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element3 = styled.div`
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    width: 30%;
    height: 60px;
    cursor: pointer;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(255, 203, 20),
        rgb(196, 154, 3)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element4 = styled.div`
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 20px;
    width: 30%;
    height: 60px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(50, 182, 95),
        rgb(35, 131, 67)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const Element5 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    background-image: linear-gradient(
        to right bottom,
        rgb(49, 172, 241),
        rgb(12, 127, 193)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const PlayerId = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
`;
export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${backGround});
    width: 1100px;
    height: 802px;
    padding: 0;
`;
export const Conversation = styled.div`
    .ConversationList {
        padding-left: 14px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: left;
        max-width: 90%;
        width: 90%;
        height: 40px;
        background-color: #dfdfdf;
        min-height: 40px;
        border-radius: 20px;
    }
    overflow-y: auto; /* 수직 스크롤을 활성화 */
    padding: 10px; /* 패딩 추가 */
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 3%;
    margin-top: 3%;
    margin-bottom: 3%;

    max-height: 50%;
    max-width: 92%;
    height: 50%;
    width: 92%;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #f0f0f0;
`;
export const ChatContainer = styled.div`
    width: 94%;
    height: 19%;
    margin-left: 3%;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 0;
    .under {
        margin-left: 20px;
    }
`;
export const ChatIcon = styled.div`
    width: 100%;
    height: auto;

    padding-bottom: 0;
    /* position: relative;
    left: -10px; */
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    .IconSize {
        width: 100px;
        border-radius: 20px;
        height: auto;
        margin: 0;
    }
`;

export const SuggestedWordCheck = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 3%;
    margin-top: 3%;
    height: 60%;
    width: 92%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-image: url(${blackboard});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top: 15px solid rgb(191, 97, 25);
    border-right: 15px solid rgb(191, 97, 25);
    border-left: 15px solid rgb(191, 97, 25);
    border-bottom: none;
`;
export const Timer = styled.div``;
export const Content1 = styled.div`
    align-items: end;

    font-size: 60px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    .content1 {
        font-size: 80px;
    }
    .content2 {
    }
`;
export const Content2 = styled.div`
    font-size: 60px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    .content1 {
        font-size: 40px;
        margin-right: -20px;
        color: #e45151;
    }
    .content2 {
        margin-left: 200px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: -55px;
    font-size: 20px;
    width: 50%;
    height: 100%;
    font-size: 50px;
    font-weight: bold;
`;
export const Ele = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;

    background-color: #dddddd;
    padding: 0;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;
export const Title = styled.div`
    display: flex;
    padding-left: 15px;
    width: 17%;
    position: relative;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    height: 100%;
    font-size: 50px;
    font-weight: bold;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: linear-gradient(
        to right bottom,
        rgb(231, 148, 85),
        rgb(193, 91, 13)
    );
    box-shadow: 6px 0px 2px rgba(0, 0, 0, 0.3);
`;
export const SuggestedWord = styled.div`
    padding-left: 0;
    display: flex;
    flex-direction: row;

    width: 94%;

    margin-left: 3%;
    margin-top: 3%;
    height: 14%;
    border-radius: 30px;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
`;
export const Element6 = styled.div`
    font-weight: bold;
    font-size: 20px;
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 60px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: linear-gradient(
        to right bottom,
        rgb(22, 115, 199),
        rgb(16, 93, 163)
    );
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform-origin: right;
`;
export const GameRuleWindow = styled(FaQuestionCircle)`
    position: absolute; // 추가
    bottom: 20px; // 추가
    left: 20px; // 추가
    left: 20px;
    background-color: none;
    margin-top: 337px;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    font-size: 25px;
    background-color: transparent;
    border: none;
`;
export const DetailCategory = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Category = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 200px;
    height: 802px;
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 40px;
    & > * {
        margin: 0;
    }
`;
export const LogoButton = styled.button`
    font-style: italic;
    font-weight: bold;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 35px;
    cursor: pointer;
    padding: 0;
    margin: 0;
`;
export const ProfileBack = styled.div`
    background-image: linear-gradient(
        to right bottom,
        rgb(227, 151, 36),
        rgb(224, 130, 42)
    );
    width: 100%;
    height: 160px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1280px;
    height: 832px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 40px;
    margin: 0 auto;
    padding: 20px;
`;

export const Header = styled.div`
   padding: 20px;
    align-items: center;
    display: flex;
    justify-content: left;
    font-size: 35px
    width: 100%;
    height: 30px;
    background-color: #000000;
`;
export const LobbyBody = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;
